import type { User } from '@/context/enrollment/interfaces/user';
import { router } from '@/router';
import { defineStore } from 'pinia';
import { ref, type Ref } from "vue";
import { useKeycloakStore } from "./apps/keycloak";

export const useAuthStore = defineStore('auth-new', () => {


  const useKeyCloak = useKeycloakStore();

  const User: Ref<User | null> = ref(null);
  const returnUrl: Ref<string> = ref('');

  function $reset() {
    User.value = null;
    returnUrl.value = '';
  }

  async function logout() {
    await useKeyCloak.logout();
    $reset();
    router.push('/auth/login1');
  }

  function setUserAuthenticated(user: User): void {
    User.value = user;
  }

  function hasPermission(permission: string): boolean {
    if (!User.value) {
      return false
    }

    if (User.value.permissions?.includes(permission)) {
      return true;
    }

    return false;
  }


  return {
    User,
    returnUrl,
    logout,
    setUserAuthenticated,
    hasPermission
  }

  
},{
  persist: true,
});
