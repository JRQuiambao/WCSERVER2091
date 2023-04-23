import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog
  }

  ]
})
