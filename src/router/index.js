import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Landing from '../views/Landing.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
    { path: '/landing', component: Landing },
  ],
})
export default router
