import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Landing from '../views/Landing.vue'
import MatjipCreate from '../views/MatjipCreate.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/:token', component: Main },
    { path: '/landing', component: Landing },
    { path: '/create', component: MatjipCreate },
  ],
})
export default router
