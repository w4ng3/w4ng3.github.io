import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";
// import { searchPlugin } from "@vuepress/plugin-search";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
export default defineUserConfig({
  lang: "zh-CN",
  title: "WD",
  description: "我的精神家园",
  base: "/",
  alias: {
    // 给组件路径创建别名
    "@MyComponent": path.resolve(__dirname, "components"),
    "@Hooks": path.resolve(__dirname, "hooks"),
    
    // 替换组件：将别名定向到自己的组件
    // "@theme-hope/module/blog/components/BlogHero": path.resolve(__dirname,"components/BlogHero.vue")
  },
  theme,
  plugins: [
    // searchPlugin({
    //   locales: {
    //     '/': {
    //       placeholder: 'Search',
    //     },
    //   },
    // }),
    // 爬虫搜索
    docsearchPlugin({
      appId: "ZVKQVSIXA2",
      apiKey: "85cc9aad14c0cbe0d2714aa9685d7f66",
      indexName: "w2gd",
      locales: {
        "/": {
          placeholder: "搜索",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
  ],
});
