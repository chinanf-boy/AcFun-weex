// import Vue from 'vue'
import Router from 'vue-router'
import HomeView from "./views/HomeView.vue"
import ActicleView from "./views/ActicleView.vue"
Vue.use(Router)

// // Story view factory
// function createStoriesView (type) {
//   return {
//     name: `${type}-stories-view`,
//     render (createElement) {
//       return createElement(StoriesView, { props: { type }})
//     }
//   }
// }

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/home', component: HomeView },    
    { path: '/acticle', component: ActicleView },    
    
    { path: '/', redirect: '/home' }
  ]
})
