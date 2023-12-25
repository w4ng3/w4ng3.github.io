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

  logo: "https://riddler.oss-cn-shanghai.aliyuncs.com/up/1179448.png",

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
    roundAvatar: true,
    description: "不要温和地走进那个良夜...",
    intro: "/intro.html",
    medias: {
      Gmail: "mailto:w2gdong@gmail.com",
      // Zhihu: "https://www.zhihu.com/people/shacoooooooooo",
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
    },
  },

  plugins: {
    blog: {
      // autoExcerpt: true,
      excerptLength: 0,
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
      align: true,
      codetabs: true,
      demo: true,
      figure: true,
      flowchart: true,
      footnote: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      mathjax: true,
      mermaid: true,
      revealJs: true,
      sub: true,
      sup: true,
      vPre: true
    },
    copyright: {
      global: true,
    },
    components:{
      components:["PDF", "Badge", "CodePen"]
    },
  },
});
