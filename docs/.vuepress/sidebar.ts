import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  {
    "/guide/": "structure",
    "/literary/":"structure"
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
