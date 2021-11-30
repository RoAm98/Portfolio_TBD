import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/PortHome.vue'

Vue.use(VueRouter)

global.backendurl= "http://localhost:3000"

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
