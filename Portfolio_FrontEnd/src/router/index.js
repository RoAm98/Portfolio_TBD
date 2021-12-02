import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/PortHome.vue'

Vue.use(VueRouter)

global.backendurl= "https://rogeram-portfolio.herokuapp.com"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
