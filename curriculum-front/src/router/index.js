import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DisplayCurriculum from '../views/DisplayCurriculum.vue'
import UpsertCurriculum from '../views/UpsertCurriculum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/upsert/curriculum',
    name: 'UpsertCurriculum',
    component: UpsertCurriculum
  },
  {
    path: '/curriculum',
    name: 'DisplayCurriculum',
    component: DisplayCurriculum
  }
]

const router = new VueRouter({
  routes
})

export default router
