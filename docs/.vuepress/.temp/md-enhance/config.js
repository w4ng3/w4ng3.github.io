import { defineClientConfig } from "@vuepress/client";
import CodeDemo from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import "/Users/w2gd/Desktop/wardendon.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("CodeTabs", CodeTabs);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    
  }
});