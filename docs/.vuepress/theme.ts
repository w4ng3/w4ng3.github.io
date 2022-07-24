import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Mr.王東",
    url: "http://w2gd.top",
  },

  iconAssets: "iconfont",

  logo: "https://oss.w2gd.top/upload/wangz.png",

  repo: "https://github.com/wardendon?tab=repositories",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,
  // 默认页脚
  footer: "",
  // 显示编辑链接
  editLink: false,

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime","Word"],

  blog: {
    // roundAvatar: true,
    description: "一位前台端菜服务员",
    intro: "/intro.html",
    medias: {
      Gmail: "mailto:w2gdong@gmail.com",
      Zhihu: "https://www.zhihu.com/people/shacoooooooooo",
      GitHub: "https://github.com/wardendon",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["joker"],
      "/black/farewell/2020TheirLetter.html": ["2020"],
      "/black/farewell/2021TheirLetter.html": ["2021"],
      "/literary/sigh/山入安记.html": ["joker"],
      "/knowledge/spiritual/996、内卷、打工人：马克思为什么是对的": ["joker"],
      "/knowledge/spiritual/金融帝国主义如何剥削全世界.html": ["joker"],
      "/knowledge/spiritual/资本主义的本质是什么？": ["joker"],
      "/knowledge/spiritual/从基金到比特币，金融资本如何隐形剥削所有打工人？": ["joker"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
    copyright: {
      global: true,
      // disableCopy: true,
      // disableSelection: true

    }
  },
});
