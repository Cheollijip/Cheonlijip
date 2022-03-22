import { createRouter, createWebHistory } from 'vue-router'
import MapKit from '../components/MapKit.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: MapKit }],
})
export default router
