---
title: 一个基础的HTTP服务器
icon: http
date: 2022-08-23
order: 1
category:
  - NodeJS
---

::: code-tabs#language
@tab index.js
```js
let server = require("./utils/server");
let router = require("./router");
let requestHandlers = require("./utils/requestHandlers");

let handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);

```
@tab server.js
```js
let http = require("http");
let url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    request.addListener("data", function (postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '" + postDataChunk + "'.");
    });

    request.addListener("end", function () {
      route(handle, pathname, response, postData);
    });
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
```
@tab requestHandles.js
```js 
let exec = require("child_process").exec;
let querystring = require("querystring");

// 处理POST请求
function start(response, postData) {
  console.log("Request handler 'start' was called.");
  let body = `
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
    </head>
    <body>
      <form action="/upload" method="post">
        <textarea name="text" rows="20" cols="60"></textarea>
        <input type="submit" value="Submit text" />
      </form>
    </body>
  </html>;`;

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(body);
  response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("You've sent the text: " + querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;
```
@tab router.js
```js
function route(handle, pathname, response, postData) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === "function") {
    handle[pathname](response, postData);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 Not found");
    response.end();
  }
}
exports.route = route;
```
:::
![post请求]( https://oss.w2gd.top/blog/httpserver.gif)

## 参考
- [Node入门](https://www.nodebeginner.org/index-zh-cn.html)
- [module.exports 、exports、export、export default的区别](https://cloud.tencent.com/developer/article/1410703)
- [如何使用 Promise](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises)