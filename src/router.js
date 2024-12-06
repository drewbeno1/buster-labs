import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './components/HomeView.vue'
import BlogView from './components/BlogView.vue'
import StorageView from './components/StorageView.vue'

const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/blog', name: 'BlogView', component: BlogView },
  { path: '/storage', name: 'StorageView', component: StorageView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
