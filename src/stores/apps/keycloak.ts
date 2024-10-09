import { request } from '@/axios';
import type { OAuth2Response, OpenidResponse } from '@/context/enrollment/interfaces/auth';
import { jwtDecode } from 'jwt-decode';
import { defineStore } from 'pinia';
import Cookies from 'universal-cookie';
import { ref, type Ref } from 'vue';

export const useKeycloakStore = defineStore(
  'keycloak',
  () => {
    const KEYCLOAK_URL = `${import.meta.env.VITE_AUTH_ENDPOINT}/${import.meta.env.VITE_AUTH_REAML_DEFAULT}`;

    const nonce: Ref<string | null> = ref(null);
    const state: Ref<string | null> = ref(null);
    const cookies = new Cookies(null, { path: '/' });

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
      const response = await request.post(
        `${KEYCLOAK_URL}/protocol/openid-connect/token`,
        {
          client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      request.defaults.headers['Authorization'] = `Bearer ${response.data.access_token}`;

      return response.data;
    }

    async function refreshToken(): Promise<OAuth2Response> {
      const oAuthToken: OAuth2Response = cookies.get('oAuthToken');

      const response = await request.post(
        `/api/realms/${import.meta.env.VITE_AUTH_REAML_DEFAULT}/protocol/openid-connect/token`,
        {
          grant_type: 'refresh_token',
          client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
          refresh_token: oAuthToken.refresh_token
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      return response.data;
    }

    // TODO: Implement this
    async function configureOTP() {
      const oAuthToken: OAuth2Response = cookies.get('oAuthToken');

      if (oAuthToken) {
        const openid: OpenidResponse = jwtDecode(oAuthToken.id_token);

        await request.put(
          `/api/users/${openid.sub}/execute-actions-email`,
          {
            actions: ['CONFIGURE_TOTP']
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        );
      }
    }

    async function logout() {
      const oAuthToken: OAuth2Response = cookies.get('oAuthToken');

      if (oAuthToken) {
        await request.post(
          `/api/realms/${import.meta.env.VITE_AUTH_REAML_DEFAULT}/protocol/openid-connect/revoke`,
          {
            client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
            token: oAuthToken.refresh_token,
            token_type_hint: 'refresh_token'
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        );
      }
    }

    return {
      getCode,
      getToken,
      refreshToken,
      configureOTP,
      logout,
      state,
      nonce
    };
  },
  {
    persist: true
  }
);
