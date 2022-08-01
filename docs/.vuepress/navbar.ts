import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "文笏", icon: "article", link: "/literary/"},
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "代码笔记",
    icon: "edit",
    prefix: "/code/",
    children: [
      { text: "Vue.js", icon: "vue", link: "vue/异步组件" },
      { text: "JavaScript", icon: "javascript", link: "js/Map&Set" },
      { text: "TypeScript", icon: "typescript", link: "ts/" },
      { text: "Node.js", icon: "nodeJS", link: "nodejs/" },
      { text: "Flutter", icon: "dart", link: "flutter/" },
    ],
  },
]);
