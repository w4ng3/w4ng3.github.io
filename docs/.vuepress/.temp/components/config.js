import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Volumes/Macintosh HD/Users/joker/Documents/w4ng3.github.io/node_modules/.pnpm/vuepress-shared@2.0.0-rc.6_vuepress-vite@2.0.0-rc.0_vuepress-webpack@2.0.0-rc.0_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "/Volumes/Macintosh HD/Users/joker/Documents/w4ng3.github.io/node_modules/.pnpm/@vueuse+core@10.9.0_vue@3.4.27/node_modules/@vueuse/core/index.mjs";
import FontIcon from "/Volumes/Macintosh HD/Users/joker/Documents/w4ng3.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_sass-loader@13.3.2_vuepress-vite@2.0.0-rc.0_vuepress-we_spejd5o222ricpinfyu3xjgxy4/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import PDF from "/Volumes/Macintosh HD/Users/joker/Documents/w4ng3.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_sass-loader@13.3.2_vuepress-vite@2.0.0-rc.0_vuepress-we_spejd5o222ricpinfyu3xjgxy4/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import Badge from "/Volumes/Macintosh HD/Users/joker/Documents/w4ng3.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_sass-loader@13.3.2_vuepress-vite@2.0.0-rc.0_vuepress-we_spejd5o222ricpinfyu3xjgxy4/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import CodePen from "/Volumes/Macintosh HD/Users/joker/Documents/w4ng3.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_sass-loader@13.3.2_vuepress-vite@2.0.0-rc.0_vuepress-we_spejd5o222ricpinfyu3xjgxy4/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import BackToTop from "/Volumes/Macintosh HD/Users/joker/Documents/w4ng3.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_sass-loader@13.3.2_vuepress-vite@2.0.0-rc.0_vuepress-we_spejd5o222ricpinfyu3xjgxy4/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/Volumes/Macintosh HD/Users/joker/Documents/w4ng3.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_sass-loader@13.3.2_vuepress-vite@2.0.0-rc.0_vuepress-we_spejd5o222ricpinfyu3xjgxy4/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
