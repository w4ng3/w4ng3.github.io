import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-shared@2.0.0-rc.6_vuepress-vite@2.0.0-rc.0_vuepress-webpack@2.0.0-rc.0_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHint } from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import "./mathjax.css";
import Mermaid from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/reveal.js@5.0.4/node_modules/reveal.js/dist/reveal.css";
import RevealJs from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/components/RevealJs.js";
import { injectRevealJsConfig } from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_flowchart.ts@3.0.0_markdown-it@13.0.2_mathjax-full@3.2._v7greqqnuks66f25u2a37bcdsa/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealJsConfig(app);
    app.component("RevealJs", RevealJs);
  },
  setup: () => {
useHint();
  }
});
