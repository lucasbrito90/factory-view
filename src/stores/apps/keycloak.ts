import { request } from "@/axios";
import type { OAuth2Response } from "@/context/enrollment/interfaces/auth";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useKeycloakStore = defineStore(
    'keycloak',
    () => {

        const KEYCLOAK_URL = `${import.meta.env.VITE_AUTH_ENDPOINT}/${import.meta.env.VITE_AUTH_REAML_DEFAULT}`;

        const nonce: Ref<string | null> = ref(null);
        const state: Ref<string | null> = ref(null);


        async function getCode(): Promise<string> {

            if (!nonce.value) {
                nonce.value = crypto.randomUUID();
            }

            if (!state.value) {

                if (localStorage.getItem('state')) {
                    localStorage.removeItem('state');
                }

                state.value = crypto.randomUUID();
                localStorage.setItem('state', state.value);
            }

            const params = new URLSearchParams({
                client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
                redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
                response_type: 'code',
                scope: 'openid',
                nonce: nonce.value,
                state: state.value
            });


            return `${KEYCLOAK_URL}/protocol/openid-connect/auth?${params.toString()}`;
        }

        async function getToken(code: string): Promise<OAuth2Response> {

            const response = await request.post(`${KEYCLOAK_URL}/protocol/openid-connect/token`, {
                client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            request.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;

            return response.data;
        }

        async function refreshToken(refreshToken: string): Promise<OAuth2Response> {

            const response = await request.post(`${KEYCLOAK_URL}/protocol/openid-connect/token`, {
                grant_type: 'refresh_token',
                client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
                refresh_token: refreshToken,
            });

            return response.data;
        }

        return {
            getCode,
            getToken,
            refreshToken,
            state,
            nonce
        }
    }, {
    persist: true,
});