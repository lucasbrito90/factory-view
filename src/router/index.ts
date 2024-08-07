import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import { useAuthStore, type AuthStore } from '@/stores/auth';
import ComponentRoutes from './ComponentRoutes';
import { useUIStore } from '@/stores/ui';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    },
    MainRoutes,
    ComponentRoutes,
    AuthRoutes
  ]
})

router.beforeEach(async (to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/auth/login1'];
  const authRequired = !publicPages.includes(to.path);
  const auth: AuthStore = useAuthStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authRequired && !auth.user) {
      auth.returnUrl = to.fullPath;
      return next('/auth/login1');
    } else next();
  } else {
    next();
  }
});

router.beforeEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = true;
});

router.afterEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = false;
});
