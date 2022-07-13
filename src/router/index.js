import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const My = () => import('@/views/My')
const Search = () => import('@/views/Search')
const ZiXun = () => import('@/views/ZiXun')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'my', component: My },
      { path: 'search', component: Search },
      { path: 'zixun', component: ZiXun }
    ]
  }
  // { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

export default router
