import { createRouter, createWebHistory } from 'vue-router'
import MapKit from '../components/MapKit.vue'
import Landing from '../views/Landing.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MapKit },
    { path: '/landing', component: Landing },
  ],
})
export default router
