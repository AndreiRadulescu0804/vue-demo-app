import { createRouter, createWebHistory } from '@ionic/vue-router'
import EvenimentsPage from '../components/base/pages/EvenimentsPage.vue'
import EvenimentDetails from '../components/base/pages/EvenimentDetails.vue'

const routes = [
  {
    path: '/',
    redirect: '/events',
  },
  {
    path: '/events',
    component: EvenimentsPage,
  },
  {
    path: '/event-details/:id',
    component: EvenimentDetails,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
