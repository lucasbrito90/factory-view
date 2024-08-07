import { acceptHMRUpdate, defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';
import { random } from 'lodash';
import type { AuthResponse } from '@/services/oauth';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    user: null as AuthResponse | null,
    returnUrl: null,
    state: crypto.randomUUID()
  }),
  actions: {
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/auth/login1');
    }
  },
  persist: true
});

export interface AuthStore {
  user: AuthResponse | null;
  returnUrl: string | null;
  state: string;
  logout: () => void;
}
