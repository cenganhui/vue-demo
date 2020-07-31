import {
  createRouter,
  createWebHistory
} from 'vue-router';
import Home from '../views/Home.vue'
import {
  childrenRoute
} from './childrenRoute.js';
const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: childrenRoute
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router