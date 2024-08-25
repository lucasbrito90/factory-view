import { useUIStore } from '@/stores/ui';
import { createRouter, createWebHistory } from 'vue-router';
import AuthRoutes from './AuthRoutes';
import ComponentRoutes from './ComponentRoutes';
import MainRoutes from './MainRoutes';
import authMiddleware from './middlewares/UserAuthenticatedHasPermission';

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
