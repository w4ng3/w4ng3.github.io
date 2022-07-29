export const categoryMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-fffb8e28"]},"未来文笏":{"path":"/category/%E6%9C%AA%E6%9D%A5%E6%96%87%E7%AC%8F/","keys":["v-78726316","v-190648d0"]},"vuepress":{"path":"/category/vuepress/","keys":["v-31297eae"]},"Vue":{"path":"/category/vue/","keys":["v-6ef429c6","v-2c0dae4e","v-ce9f40b4"]}}}},"tag":{"/":{"path":"/tag/","map":{"轻盈":{"path":"/tag/%E8%BD%BB%E7%9B%88/","keys":["v-78726316"]},"迅速":{"path":"/tag/%E8%BF%85%E9%80%9F/","keys":["v-190648d0"]},"组件优化":{"path":"/tag/%E7%BB%84%E4%BB%B6%E4%BC%98%E5%8C%96/","keys":["v-6ef429c6","v-2c0dae4e","v-ce9f40b4"]}}}}}

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
