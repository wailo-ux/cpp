import { createRouter, createWebHistory } from 'vue-router'
import MotorView from '../views/MotorView.vue'
import PowerView from '../views/PowerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'motor',
      component: MotorView
    },
    {
      path: '/power',
      name: 'power',
      component: PowerView
    }
  ]
})

export default router