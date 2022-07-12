export const categoryMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-4eaf9f84","v-fffb8e28","v-4c863446","v-bf720700","v-0978b044"]},"轻盈":{"path":"/category/%E8%BD%BB%E7%9B%88/","keys":["v-5c61a91c"]},"未来文笏":{"path":"/category/%E6%9C%AA%E6%9D%A5%E6%96%87%E7%AC%8F/","keys":["v-78726316","v-190648d0"]},"CategoryA":{"path":"/category/categorya/","keys":["v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-08a2b06d","v-06edd7ce"]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/%E7%A6%81%E7%94%A8/","keys":["v-4c863446"]},"文章加密":{"path":"/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/","keys":["v-bf720700"]},"Markdown":{"path":"/tag/markdown/","keys":["v-0978b044"]},"页面配置":{"path":"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","keys":["v-4eaf9f84"]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-4eaf9f84"]},"轻盈":{"path":"/tag/%E8%BD%BB%E7%9B%88/","keys":["v-78726316"]},"迅速":{"path":"/tag/%E8%BF%85%E9%80%9F/","keys":["v-190648d0"]},"tag A":{"path":"/tag/tag-a/","keys":["v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690"]},"tag B":{"path":"/tag/tag-b/","keys":["v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
