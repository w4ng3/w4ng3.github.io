import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "WD",
  description: "我的精神家园",
  base: "/",

  theme,
});
