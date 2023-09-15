---
title: Demo Express + Sequelize + MySQL
icon: nodeJS
date: 2023-02-01
order: 4
category:
  - NodeJS
---

::: tip 说明
使用 Express + Sequelize + MySQL 写一个简单的接口
:::

## 项目搭建

首先，创建数据库

![创建数据库](http://w2gd.oss-cn-shanghai.aliyuncs.com/up/20230201191627.png)

然后创建 node 项目，配置 package.json

```json
{
  "name": "one_app_node",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "serve": "node server.js"
  },
  "keywords": [],
  "author": "w2gd",
  "license": "ISC",
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "express": "^4.18.2",
    "multer": "1.4.5-lts.1",
    "mysql2": "^3.1.0",
    "sequelize": "^6.28.0"
  }
}
```

项目结构如下
:::center
![项目结构](http://w2gd.oss-cn-shanghai.aliyuncs.com/up/20230201211233.png)
:::

## 连接数据库

### 先定义数据模型

```js
// idea.controller.js
import { Sequelize, DataTypes } from "sequelize";
export default (sequelize) => {
  const Idea = sequelize.define("idea", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    avatarUrl: {
      type: DataTypes.STRING,
    },
    likeNum: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isLiked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    imageHeight: {
      type: DataTypes.DOUBLE,
    },
  });
  return Idea;
};
```

```js
// modules/index.js
import { Sequelize } from "sequelize";
import ideaModel from "./idea.model.js";
const sequelize = new Sequelize("wd_txy", "root", "mysql@1212", {
  host: "124.221.138.97",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ideas = ideaModel(sequelize);

export default db;
```

### 统一响应 JSON 格式

```js
/**
 * utils/unifyResFormat.js
 * 中间件 --- 统一响应 JSON 格式
 */
export default (req, res, next) => {
  res.setUnifyResFormat = (code, data, msg = "success") => {
    let res = {};
    if (code === 1) {
      res = {
        code,
        data,
        msg,
      };
    } else {
      res = {
        code,
        msg,
      };
    }
    return res;
  };
  next();
};
```

### 启动 server ,数据同步

```js
import express from "express";

import resextra from "./utils/unifyResFormat.js";
import ideaRouter from "./routes/ideas.js";
import path from "path";
import db from "./modules/index.js";
const __dirname = path.resolve(); // 当前路径的绝对路径

let app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(resextra);
app.use("/ideas", ideaRouter);
app.get("/", function (req, res) {
  res.header("Content-Type", "text/html;charset=utf-8");
  res.sendFile(__dirname + "/" + "index.html");
});

// 启动server
let server = app.listen(4312, () => {
  // @ts-ignore
  let port = server.address().port;
  console.log(`应用实例，访问地址为 http://localhost:${port}`);
});

console.log("准备同步数据库");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db");
  })
  .catch((err) => {
    console.log("Failed to sync db:" + err);
  });
```

## 路由

```js
// routes/ideas.js
import { Router } from "express";
import {
  createIdea,
  findAllIdea,
  findIdeaById,
} from "../controllers/idea.controller.js";

let ideaRouter = Router();
/**
 * api
 * 路由前缀  /ideas
 */
// 获取想法列表
ideaRouter.get("/list", findAllIdea);

// 想法详情
ideaRouter.get("/find/:id", findIdeaById);
ideaRouter.post("/add", createIdea);

//导出该路由
export default ideaRouter;
```

## 控制层

```js
import db from "../modules/index.js";
const Idea = db.ideas;

// 根据ID 查询想法
export const findIdeaById = async (req, res) => {
  let data = await Idea.findOne({ where: { id: req.params.id } }).catch(
    (err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving ideas.",
      });
    }
  );
  if (data != null) {
    res.send(res.setUnifyResFormat(1, data));
  } else {
    res.send(res.setUnifyResFormat(0, data, "查询不到该用户"));
  }
};

// 查询所有想法
export const findAllIdea = (req, res) => {
  Idea.findAll({
    // attributes: { exclude: ["createdAt"] }, // 去除一些字段
    order: [["id", "DESC"]], // id 倒序排列
  }).then((data) => {
    res.send(res.setUnifyResFormat(1, data));
  });
};

// 增
export const createIdea = (req, res) => {
  let imageHeight = Math.round(Math.random() * (220 - 150) + 150);
  Idea.create({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    content: req.body.content,
    avatarUrl: req.body.avatarUrl,
    imageHeight,
  }).then((data) => {
    res.send(data);
  });
};
```

## ECS 部署

将文件上传到 git 仓库后下载压缩包，或者在服务器上用 git 拉取，解压后，用宝塔面板的侧边栏的网站模块，添加 Node 项目即可。
:::center
<img src="http://w2gd.oss-cn-shanghai.aliyuncs.com/up/20230201213043.png" height="500"/>
:::
