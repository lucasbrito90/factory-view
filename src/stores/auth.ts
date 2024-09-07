import type { OAuth2Response } from "@/context/enrollment/interfaces/auth";
import { logout } from '@/context/enrollment/services/userapi';
import { router } from '@/router';
import { defineStore } from 'pinia';

// import { useAuthUserStore } from '@/stores/authUser';
// const authUserStore = useAuthUserStore();

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    OAuthToken: null as OAuth2Response | null,
    // user: authUserStore.userAuth,
    returnUrl: '',
  }),
  actions: {
    logout() {
      this.OAuthToken = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      logout();
      router.push('/auth/login1');
    },

    setToken() {
      
      if (this.OAuthToken?.access_token){
        
        if (localStorage.getItem('token')) {
          localStorage.removeItem('token');
        }

        localStorage.setItem('token', this.OAuthToken.access_token);
      }

    },

    isAuthenticated(): boolean {
      return !!this.OAuthToken?.access_token;
    },
    
  },
  persist: true
});
