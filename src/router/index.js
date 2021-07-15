import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import List from '../views/List.vue'
import Favorite from '../views/Favorite.vue'
import Loading from '../views/Loading.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Welcome
  },
  {
    path:'/list',
    name:'list',
    component:List
  },
  {
    path:'/favorite',
    name:'favorite',
    component:Favorite
  },
  {
    path:'/loading',
    name:'loading',
    component:Loading
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
