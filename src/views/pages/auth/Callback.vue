<script setup lang="ts">

import InteractiveLoading from '@/context/enrollment/components/loading/InteractiveLoading.vue';
import { getToken, getUserPermissions } from '@/services/authorizatio_code_flow/authcode';
import type { AuthResponse } from '@/shared/interfaces/auth';
import { useAuthStore } from '@/stores/auth';
import { useAuthUserStore } from '@/stores/authUser';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const code = ref<string | null>(null);
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const authUserStore = useAuthUserStore();

onMounted(async () => {
    code.value = route.query.code as string;

    if (code.value) {
        const response: AuthResponse = await getToken(code.value);
        authStore.user = response;

        // Set token in the store
        authStore.setToken();

        // In order to get the permissions, we need to make the previous request
        // to set the token in the store that means we are authenticated
        const permissions: string[] = await getUserPermissions();
        authStore.user.permissions = permissions;

        // Set User in the store
        authUserStore.getUserAccessToken();

        router.push({ name: 'Default' });
    }
});

</script>

<template>
    <InteractiveLoading />
</template>