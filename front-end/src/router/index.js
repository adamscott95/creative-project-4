import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Enroll from '../views/Enroll.vue'
import Students from '../views/Students.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/enroll',
    name: 'Enroll',
    component: Enroll
  },
  {
    path:'/students',
    name: 'Students',
    component: Students
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
