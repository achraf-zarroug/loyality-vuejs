import { createRouter, createWebHistory } from 'vue-router'
import FeaturesPage from '../views/FeaturesPage.vue'
import HomePage from '../views/HomePage.vue'
import PricingPage from '../views/PricingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
  { path: '/features', component: FeaturesPage },
  { path: '/pricing', component: PricingPage }
  ]
})


export default router
