<script setup lang="ts">
import { getToken, getUserPermissions, type AuthResponse } from '@/services/authorizatio_code_flow/authcode';
import { useAuthStore } from '@/stores/auth';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const code = ref<string | null>(null);
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

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

        router.push({ name: 'Default' });
    }
});

</script>

<template>
    Loading...
</template>