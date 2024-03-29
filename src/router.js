import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import UserLists from './views/UserLists'
import Reg from './views/Reg'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: '/reg',
      component: Reg
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // 配置home的子路由
      children:[
        {
          path: 'userlists',
          name: 'userlists',
          component: () => import(/* webpackChunkName: "userlists" */ './views/UserLists.vue')
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
