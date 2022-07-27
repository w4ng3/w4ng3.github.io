import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";

export default defineUserConfig({

  lang: "zh-CN",
  title: "WD",
  description: "我的精神家园",
  base: "/",

  theme,
  alias: {
    // 给组件路径创建别名
    "@MyComponent": path.resolve(__dirname, "components"),
    // 替换组件：将别名定向到自己的组件
    // "@theme-hope/module/blog/components/BlogHero": path.resolve(__dirname,"components/BlogHero.vue")
  },
});
