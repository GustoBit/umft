import { createRouter, createWebHistory } from 'vue-router'
import { mainMenu } from './nav/menu'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...mainMenu],
})

router.beforeEach((to) => {
  document.title = `UMFT | ${to?.meta?.title}`
})
export default router