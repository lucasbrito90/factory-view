import type { User } from '@/context/enrollment/interfaces/user';
import { getUserByEmail } from '@/context/enrollment/services/userapi';
import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';

export const useAuthUserStore = defineStore(
'authUser', () => {
  const userAuth: Ref<User | null> = ref(null);

  async function getUserAccessToken(email: string): Promise<void> {
    userAuth.value = await getUserByEmail(email);
  }

  async function setUserAuthenticated(user: User): Promise<void> {
    userAuth.value = user;
  }

  function hasPermission(permission: string): boolean {
    if (!userAuth.value) {
      return false
    }

    if (userAuth.value.permissions?.includes(permission)) {
      return true;
    }

    return false;
  }

  return {
    userAuth,
    getUserAccessToken,
    setUserAuthenticated,
    hasPermission
  }
},
{
  persist: true,
});