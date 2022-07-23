import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "文笏", icon: "creative", link: "/literary/"},
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "代码笔记",
    icon: "edit",
    prefix: "/posts/",
    children: [
      // {
      //   text: "文章 1-4",
      //   icon: "edit",
      //   prefix: "article/",
      //   children: [
      //     { text: "文章 1", icon: "edit", link: "article1" },
      //     { text: "文章 2", icon: "edit", link: "article2" },
      //     "article3",
      //     "article4",
      //   ],
      // },
    ],
  },
]);
