<script setup lang="ts">

import InteractiveLoading from '@/context/enrollment/components/loading/InteractiveLoading.vue';
import type { OAuth2Response, OpenidResponse } from "@/context/enrollment/interfaces/auth";
import { getUserByEmail, getUserPermissions } from '@/context/enrollment/services/userapi';
import { useKeycloakStore } from '@/stores/apps/keycloak';
import { useAuthStore } from '@/stores/auth';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'universal-cookie';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const code = ref<string | null>(null);
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const cookies = new Cookies(null, {path: '/'});

const useKeycloak = useKeycloakStore();

onMounted(async () => {
    code.value = route.query.code as string;

    if (route.query.state != useKeycloak.state) {
        router.push({ name: 'Login' });
    }

    if (code.value) {

        const response: OAuth2Response = await useKeycloak.getToken(code.value);

        if (cookies.get('oAuthToken')) {
            cookies.remove('oAuthToken');
        }

        cookies.set('oAuthToken', response);

        if (response.id_token) {
            const openidResponse: OpenidResponse = jwtDecode(response.id_token);
            
            //add openidResponse to cookie
            if (cookies.get('openidResponse')) {
                cookies.remove('openidResponse');
            }

            cookies.set('openidResponse', openidResponse);

            if (openidResponse.nonce != useKeycloak.nonce) {
                router.push({ name: 'Login' });
            }

            // Set User in the store
            authStore.User = await getUserByEmail(openidResponse.email);

            // In order to get the permissions, we need to make the previous request
            // to set the token in the store that means we are authenticated
            authStore.User.permissions = await getUserPermissions(openidResponse.email);
            
        }

        // Set token in the store
        // authStore.OAuthToken = response;

        router.push({ name: 'Default' });
    }
});

</script>

<template>
    <InteractiveLoading />
</template>