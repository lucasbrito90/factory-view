import { useAuthStore } from '@/stores/auth';
import Cookies from 'universal-cookie';
import { useRouter, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router';

const authMiddleware = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {

    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/auth/login1'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();
    const router = useRouter();
    const cookies = new Cookies(null, { path: '/' });

    if (to.matched.some((record) => record.meta.requiresAuth)) {

        // if user is not authenticated, redirect to login page
        if (authRequired && cookies.get('oAuthToken') === undefined) {
            auth.returnUrl = to.fullPath;
            return next('/auth/login1');
        }

        // if user is authenticated but does not have permission, redirect to previous page
        else if (to.meta.permission && auth.hasPermission(to.meta.permission as string)) {
            return router.go(-1);
        }

        else {
            next();
        }
    } else {
        next();
    }
}

export default authMiddleware;