import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  alias: {
    "@MyComponent": path.resolve(__dirname, "components/MyComponent.vue"),
  },
  lang: "zh-CN",
  title: "WD",
  description: "我的精神家园",
  base: "/",

  theme,
});
