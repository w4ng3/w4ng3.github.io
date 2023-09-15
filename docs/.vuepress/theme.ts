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

  logo: "https://riddler.oss-cn-shanghai.aliyuncs.com/blog/joker.png",

  repo: "https://github.com/wardendon?tab=repositories",

  docsDir: "docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,
  // 默认页脚
  footer: "",
  // 显示编辑链接
  editLink: false,

  displayFooter: true,
  // 暗色主题切换
  // darkmode:"toggle",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word"],

  blog: {
    // roundAvatar: true,
    description: "一位前台端菜实习生",
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
      "/black/farewell/2022TheirLetter.html": ["2022"],
      "/literary/sigh/山入安记.html": ["joker"],
      "/knowledge/spiritual/996、内卷、打工人：马克思为什么是对的": ["joker"],
      "/knowledge/spiritual/金融帝国主义如何剥削全世界.html": ["joker"],
      "/knowledge/spiritual/资本主义的本质是什么？": ["joker"],
      "/knowledge/spiritual/从基金到比特币，金融资本如何隐形剥削所有打工人？": [
        "joker",
      ],
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
      provider: "Giscus",
      repo: "wardendon/wardendon.github.io",
      repoId: "R_kgDOHpT5cQ",
      category: "General",
      categoryId: "DIC_kwDOHpT5cc4CQjau",
      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      // enableAll: true, // 全部开启
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,
      imageMark: true,
      mermaid: true,
      sub: true,
      sup: true,
      tex: true,
      vpre: true,
    },
    copyright: {
      global: true,
    },
    components: ["PDF", "Badge", "CodePen"],
  },
});
