---
title: Docker
icon: /icons/docker.png
order: 2
category:
  - 使用指南
tag:
  - docker
article: false
---

## Dockerfile 指令

在 Dockerfile 中，有多个常用的指令，每个指令都有不同的作用。以下是一些常见的 Dockerfile 指令以及它们的简要介绍：

1. `FROM`：指定基础镜像，用于构建当前镜像。
2. `MAINTAINER`：指定镜像的维护者信息，已经被废弃，推荐使用 LABEL 代替。
3. `RUN`：在镜像中执行命令，用于安装软件包、执行编译等操作。
4. `CMD`：指定容器启动时执行的命令，每个 Dockerfile 只能有一个 CMD 指令。
5. `LABEL`：为镜像添加元数据，如作者、版本号等信息。
6. `EXPOSE`：声明容器运行时监听的端口，供外部连接使用。
7. `ENV`：设置环境变量。
8. `ADD`：复制文件或目录到镜像中，支持 URL 资源复制和解压缩。
9. `COPY`：复制本地文件到镜像中。
10. `ENTRYPOINT`：配置容器启动时执行的命令，可以与 CMD 指令一起使用。
11. `VOLUME`：声明容器中的目录为持久化存储卷。
12. `WORKDIR`：设置容器内的工作目录。
13. `USER`：指定运行容器的用户或用户组。



## 部署前端项目

1. `npm run build`打包，在项目根目录生成`dist`目录。

2. 项⽬根⽬录下新建⽂件 `nginx.conf`

   ```nginx
   ``server {
     listen 80;
     server_name localhost;
   
     location / {
       root   /usr/share/nginx/html/v3tsh5;
       index  index.html;
       # 对于vue或者React项目，使用 history路由需要
       try_files $uri $uri/ /index.html;
     }
     
     error_page   500 502 503 504  /50x.html;
     location = /50x.html {
       root   /usr/share/nginx/html;
     }
   }
   ```

   配置⽂件定义了⾸⻚为` /usr/share/nginx/html/v3tsh5/index.html`，所以可以⼀会把构建出 来的 `index.html` ⽂件和相关的静态资源放到 `/usr/share/nginx/html/v3tsh5` ⽬录下。

   

3. 项⽬根⽬录创建 `Dockerfile` ⽂件

   ```dockerfile
   # 指定基础镜像为最新版 nginx
   FROM nginx:latest
   # 拷贝文件,将上面定义的 nginx.conf 文件复制到nginx的conf.d文件夹内，这里的 default 可以设置为任何名称
   COPY ./nginx.conf /etc/nginx/conf.d/default.conf
   # 拷贝dist到 nginx目录
   RUN echo '拷贝dist到nginx目录'
   COPY ./dist /usr/share/nginx/html/v3tsh5/
   # 声明容器运行时监听的端口，供外部连接使用
   EXPOSE 80/tcp
   ```

   > EXPOSE 并不会真正将宿主机上的端口暴露出来，它只是一个元数据，方便用户了解容器的网络设置

4. 构建镜像

   ```bash
   docker build -t v3tsh5 .
   ```

   `-t` 后表示指定镜像名称 `v3tsh5`，`. `表示指定 Dockerfile 所在目录

5. 启动

   ```bash
   docker run -itd -p 8001:80 --name vue3ts-h5 v3tsh5
   ```

   > - docker run: 这是 Docker 命令行中运行新容器的命令。
   >
   > - -itd: 这是 docker run 命令的三个标志组合的缩写。
   >
   >   - -i 或 --interactive：保持容器的标准输入（STDIN）打开，即使没有附加也是如此。
   >
   >   - -t 或 --tty：为容器分配一个伪终端或伪 TTY。这通常用于让容器表现得像是一个真实的终端。
   >
   >   - -d 或 --detach：在后台运行容器，并打印容器的 ID。
   >
   > - -p 8001:80: 这是端口映射参数，`-p 或 --publish`将容器的端口映射到主机的端口，在这个例子中，容器内部的 80 端口被映射到运行 Docker 的主机上的 8001 端口。
   >
   > - --name vue3ts-h5: 这是用于指定容器名称的参数。
   >
   > - 末尾的 v3tsh5: 这是要运行的 Docker 镜像的名称。

6. 访问

   - `docker ps`查看docker 进程

   - 打开`http://localhost:8001/`访问网页

7. 关闭容器

   `docker stop vue3ts-h5`

### Nginx设置反向代理

```nginx
server {
  listen 80;
  server_name localhost;
  # 接口地址反代
  location /api {
      proxy_pass http://backend_server_ip:port;
  }
}
```

在上面的示例中，当访问`localhost/api`时，请求会被反向代理到`http://backend_server_ip:port`的地址。

如果有需要，还可以配置其他反向代理相关的选项，比如设置代理头部信息、设置代理超时时间等。例如： 

```nginx
location /api {
    proxy_pass http://backend_server_ip:port;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
}
```


## 安装Node.js

如果不想在本地打包，而是上传到docker里，则需要安装node环境。

在`dockerfile`文件里添加以下内容，注意运行顺序：

```dockerfile
# 安装Node.js，若要指定版本则 node:18.17.0
FROM node:latest
# 创建工作目录
# WORKDIR /app
# 将node_modules添加到工作目录
COPY package.json .
# 设置npm国内镜像源
RUN npm config set registry https://registry.npmmirror.com
RUN npm install
RUN echo "依赖安装完成..."
# 将所有文件复制到工作目录
COPY . .
# 编译前端项目
RUN echo '开始build'
RUN npm run build
RUN echo '---build 完成---'
```

可以定义不需要复制的文件`.dockerignore`

```dockerfile
node_modules
.git
scripts
README.md
dist
```

