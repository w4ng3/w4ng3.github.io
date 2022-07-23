import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  {
    "/guide/": "structure",
    "/literary/":[
      "",
      "/literary/light",
      "/literary/swift",
      {
        text: "无端太息",
        icon: "creative",
        prefix: "sigh/",
        collapsable: true,
        children: "structure",
      }],
    "/knowledge/":[
      "",
      {
        text: "当代精神文明建设考",
        icon: "creative",
        prefix: "spiritual/",
        collapsable: true,
        children: "structure",
      }],
    "/black/": [
      "",
      {
        text: "告别",
        icon: "creative",
        prefix: "farewell/",
        collapsable: true,
        children: "structure",
      },
    ]
  }

//  [
//     "/slide",
//     {
//       text: "如何使用",
//       icon: "creative",
//       prefix: "/guide/",
//       link: "/guide/",
//       children: "structure",
//     },
//     {
//       text: "文章",
//       icon: "note",
//       prefix: "/posts/",
//       children: [
//         {
//           text: "文章 1-4",
//           icon: "note",
//           collapsable: true,
//           prefix: "article/",
//           children: ["article1", "article2", "article3", "article4"],
//         },
//       ],
//     },
//   ]
);
