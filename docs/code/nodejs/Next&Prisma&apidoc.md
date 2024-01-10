---
title: Next + Prisma + apidoc 简单实践
icon: nodeJS
date: 2024-01-09
order: 5
category:
  - NodeJS
  - Next
---

使用 Next 写CRUD接口，探索TS全栈框架。

<!-- more -->

[next-server-demo 仓库](https://github.com/wardendon/next-server-demo)

## Next api

- [Next.js 中文网: 用于 Web 的全栈 React 框架](https://next.nodejs.cn/)
- [Next 应用路由/api 路由](https://next.nodejs.cn/docs/app/building-your-application/routing/route-handlers)

## use Prisma in Next

- [Prisma](https://www.prisma.io/docs/orm/prisma-schema/data-model/models)
- [Prisma 中文](https://prisma.nodejs.cn/getting-started/quickstart)

### 简单 CRUD

- src/app/api/car/route.ts

```ts
/** @api {get} /api/car?id=${cid} 查询汽车 */
export async function GET(req: NextRequest) {
  // 获取 Query 参数
  const { searchParams } = req.nextUrl;
  const id = parseInt(searchParams.get("id") ?? "0");
  const cars = id
    ? await prisma.car.findFirst({ where: { id } })
    : await prisma.car.findMany();
  return NextResponse.json({ data: cars }, { status: 200 });
}

/** @api {post} /api/car 新增汽车 */
export async function POST(req: NextRequest) {
  // 获取 Body 参数
  // request 接口的 json() 方法读取请求体病将其作为一个 promise 返回，结果是一个JS对象
  const carData: Prisma.CarCreateInput = await req.json();
  await prisma.car.create({ data: carData });
  return NextResponse.json({ code: 1, msg: "success" }, { status: 200 });
}

/** @api {delete} /api/car?id=${cid} 删除汽车 */
export async function DELETE(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const id = parseInt(searchParams.get("id") ?? "0");
  await prisma.car.delete({ where: { id } });
  return NextResponse.json(
    { code: 1, msg: `已删除ID=${id}的数据` },
    { status: 200 }
  );
}
```

- src/app/api/car/[id]/route.ts

```ts
/** @api {PATCH} /api/car/:id 编辑汽车 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const car: Prisma.CarCreateInput = await req.json();
  await prisma.car.update({
    where: { id },
    data: car,
  });
  return NextResponse.json({ code: 1, msg: "修改成功" }, { status: 200 });
}
```

## use apidoc in Next

尝试了 swagger 和 apidoc 后，选择了 apidoc。（实在是无法接受在jsDoc里写yaml）

- [apiDoc](https://apidocjs.com/#param-api)
  按照文档在jsdoc写接口注解，就能生成api文档了

![apidoc文档](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/202401110035062.png)

```ts
/**
 * @api {post} /api/car 新增汽车
 * @apiVersion  1.0.0
 * @apiHeader {String} Authorization 用户授权token.
 * @apiName AddCar
 * @apiGroup Car
 * @apiDescription 新增汽车
 *
 * @apiBody  {String} name 汽车名称
 * @apiBody  {String} brand 汽车品牌
 * @apiBody  {Number} price 汽车价格
 * @apiBody  {String} imageUrl 汽车图片
 * @apiSuccess (200) {Object} data 汽车数据
 * @apiSuccess (200) {number} code 操作码
 * @apiSuccess (200) {String} msg 描述信息
 */
export async function POST(req: NextRequest) {
  // 获取 Body 参数
  // request 接口的 json() 方法读取请求体病将其作为一个 promise 返回，结果是一个JS对象
  const carData: Prisma.CarCreateInput = await req.json();
  await prisma.car.create({ data: carData });
  return NextResponse.json({ code: 1, msg: "success" }, { status: 200 });
}
```

最好在`.vscode` 里配置了 apidoc 注解的代码片段

还可以安装拓展插件`apidoc-markdown`，生成markdown文档，方便交付。
在 package.json 里添加命令 `api:doc`，方便同时更新html文档和md文档

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "api:doc": "apidoc -i src/app/api/ -o doc/ && apidoc-markdown -i src/app/api/ -o doc/api.md"
  }
}
```

## 部署

- [Next 部署](https://next.nodejs.cn/docs/app/building-your-application/deploying/)
- [Prisma 在 Vercel 的部署注意事项](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/vercel-caching-issue)
