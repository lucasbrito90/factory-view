import { logout } from '@/context/enrollment/services/userapi';
import { router } from '@/router';
import type { AuthResponse } from '@/shared/interfaces/auth';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    user: null as AuthResponse | null,
    returnUrl: null,
    state: crypto.randomUUID(),
    verifier: '',
    codeChallenge: '',
  }),
  actions: {
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      logout();
      router.push('/auth/login1');
    },

    setToken() {
      
      if (this.user?.access_token){
        localStorage.setItem('token', this.user?.access_token);
      }

    },

    isAuthenticated(): boolean {
      return !!this.user?.access_token;
    },

    hasPermission(permission: string): boolean {
      if (!this.user) {
        return false
      }

      if (this.user.permissions?.includes(permission)) {
        return true;
      }

      return false;
    },
    
  },
  persist: true
});

export interface AuthStore {
  user: AuthResponse | null;
  returnUrl: string | null;
  state: string;
  logout: () => void;
  isAuthenticated: () => boolean;
  hasPermission: (permission: string) => boolean;
}
