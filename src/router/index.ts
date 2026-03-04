import MainLayout from '@/layouts/MainLayout.vue'
import AdminPanelView from '@/views/AdminPanelView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import AboutView from '@/views/public/AboutView.vue'
import HomeView from '@/views/public/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView,
        },
      ],
    },
    {
      path: '/admin',
      meta: { private: true },
      component: MainLayout,
      children: [{ path: '', name: 'admin', component: AdminPanelView }],
    },
    {
      path: '/auth',
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginView,
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView,
        },
      ],
    },
  ],
})

router.beforeEach(async (to) => {
  const token = await cookieStore.get('token')
  if (to.meta.private && !token) {
    return { name: 'login' }
  }

  if (token && ['login', 'register'].includes(to.name as string)) {
    return { name: 'home' }
  }
})

export default router
