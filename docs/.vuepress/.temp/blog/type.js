export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-78726316","v-b8031ba4","v-0f7d1bf2","v-ce9f40b4","v-31297eae","v-6ef429c6","v-2c0dae4e","v-190648d0","v-f09f94c4","v-0e503981","v-fffb8e28","v-28ad0a1b","v-ba480f32","v-2d12431c"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-0e503981"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-b8031ba4","v-0f7d1bf2","v-ce9f40b4","v-31297eae","v-6ef429c6","v-2c0dae4e","v-78726316","v-190648d0","v-f09f94c4"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
