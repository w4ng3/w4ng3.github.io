---
title: nodeJS连接mysql数据库
icon: mysql
date: 2022-08-23
order: 2
category:
  - mysql
  - NodeJS
---
## 安装
```
pnpm add --save mysql2
```

::: tip mysql2相比mysqls的优势
mysql2的性能更高，支持PreparedStatement，多次查询性能更高，书写SQL更简单；自带Promise包装器，可以直接使用async/await语法；和大部分的mysqls库兼容。且被sequlize支持。
:::

## 连接数据库

[在Node.js中如何使用mysql2](https://blog.csdn.net/qq_45040919/article/details/110139354)

```js
const mysql = require("mysql2");

// 创建连接对象
const connection = mysql.createConnection({
  host: "localhost", //连接的数据库地址。（默认:localhost）
  user: "root", //mysql的连接用户名
  password: "123456", // 对应用户的密码
  port: 3306, // 端口
  database: "db_soft", //所需要连接的数据库的名称
});
// 开始连接
connection.connect();
// 执行sql
const sql = `SELECT * FROM t_student WHERE student_name like '_智康'`;
// const sql2 = `DELETE from t_student WHERE student_name like '测试%'`;
// const sql3 = `insert into t_student values (4312,2,'王東','江西赣州','1999-07-10');`;
connection.query(sql, (error, result) => {
  if (error) {
    console.error("error", error);
    return;
  }
  console.log("result:", result);
});
// 连接关闭
connection.end();

// 打印结果
// result: [
//   RowDataPacket {
//     student_id: 1001,
//     clazz_id: 1,
//     student_name: '钱智康',
//     hometown: '江苏苏州',
//     birthday: 2000-01-17T16:00:00.000Z
//   },
// ]
```
`connection.query`方法可以用来查询，并且执行任意正确的sql语句。接受第一个参数就是一个sql语句字符串，第二个参数是执行sql语句后的回调函数。

## ORM 和Sequelize
如果直接使用这个mysql包提供的接口访问数据库，我们编写的代码就比较底层，因为是直接写SQL命令来访问的。

其实数据库的表是一个二维表，可以有多行多列。这个表的结构可以映射成一个JS对象，每一行都可以用一个对象来表示。每个列的字段就是对象里的每个属性。这个就是ORM技术：Object-Relational Mapping 就是把关系数据库的表结构映射到对象上。

那由谁来做这个转换呢？就是ORM框架，Sequelize就是这种ORM框架，可以让我们读写JS对象，它帮我们把对象变成表中的每行。

[Sequelize Docs 中文版](https://github.com/demopark/sequelize-docs-Zh-CN)

### demo CRUD
```js
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_soft", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
    },
  },
  { sequelize }
);

(async () => {
  await sequelize.sync(); // 模型同步
  // 增：create 创建实例并持久保存
  const yy = await Book.create({
    name: "红拂夜奔",
    author: "王二",
  });
  console.log(yy.name);

  // 改：update
  await Book.update(
    { name: "Store of O" },
    {
      where: { id: 2 },
    }
  );

  // 查：findAll
  const obj = await Book.findAll({
    where: {
      author: "王二",
    },
  });
  console.log("BookList:", JSON.stringify(obj, null, 2));

  // 删：destroy
  await Book.destroy({
    where: { name: "我的阴阳两界" },
  });

  // 关闭连接
  await sequelize.close();
})();
```
Sequelize的核心概念就是模型。在Sequelize里，模型就是一个继承了`Model`的类，它相当于数据库里的一张表的结构。由这个类创建出来的一个实例对象，相当于表里的一行。  
首先`new Sequelize`创建一个`sequelize`连接对象，包含了连接到的mysql数据库的信息。然后声明一个模型叫Book。
- 用`Book.init`对这个模型初始化，就是对表初始化，有哪些属性（列）及其数据类型。第二个参数就是要连接的对象。
- `sequelize.sync()`用来同步我们这个模型和表，因为可能表已经存在，或者有不同的列，所以要先同步一下。
- `Book.create`用模型创建一个实例对象，就是在表中添加一行数据。这个都是异步的，相当于一个promise，所以用await非常简洁。
- `Book.findAll` 用于查询

## 参考

- [《使用nodejs连接mysql数据库》](https://juejin.cn/post/6920948406055616526#heading-5)