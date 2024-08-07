import type { User } from '@/context/enrollment/interfaces/user';
import { getUserByAccessToken } from '@/context/enrollment/services/userapi';
import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';

export const useAuthUserStore = defineStore(
'authUser', () => {
  const userAuthenticated: Ref<User | null> = ref(null);

  async function getUserAccessToken(): Promise<void> {
    userAuthenticated.value = await getUserByAccessToken();
  }

  async function setUserAuthenticated(user: User): Promise<void> {
    userAuthenticated.value = user;
  }

  return {
    userAuthenticated,
    getUserAccessToken,
    setUserAuthenticated,
  }
},
{
  persist: true,
});