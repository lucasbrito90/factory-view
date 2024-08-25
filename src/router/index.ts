import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import { useAuthStore, type AuthStore } from '@/stores/auth';
import ComponentRoutes from './ComponentRoutes';
import { useUIStore } from '@/stores/ui';
import authMiddleware from './middlewares/UserAuthenticatedHasPermission';
import axios from 'axios';

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

router.beforeEach(authMiddleware);

router.beforeEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = true;
});

router.afterEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = false;
});
