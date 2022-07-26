import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "文笏", icon: "creative", link: "/literary/"},
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "代码笔记",
    icon: "edit",
    prefix: "/code/",
    children: [
      { text: "Vue.js", icon: "vue", link: "vue/异步组件" },
    ],
  },
]);
