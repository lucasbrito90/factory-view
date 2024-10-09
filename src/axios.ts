import axios from 'axios';
import Cookies from 'universal-cookie';
import { logout, updateOAuthToken } from './context/enrollment/services/authorizatio_code_flow/keycloack';

export const request = axios.create({});
const cookies = new Cookies(null, { path: '/' });
const KEYCLOAK_URL = `${import.meta.env.VITE_AUTH_ENDPOINT}/${import.meta.env.VITE_AUTH_REAML_DEFAULT}`;

export function setToken(token: string) {
  request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

//renove o token quando vencido sendo que access_token e o refresh_token esta armaezando no cookie oAuthToken e id_token no openidResponse e tambem recibido na requisiçao da renovação do token dentro da chave id_token com uma chave exp que é o tempo de expiração do token
request.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const oAuthToken = cookies.get('oAuthToken');
    const openidResponse = cookies.get('openidResponse');

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (oAuthToken && openidResponse) {
        try {
          const response = await request.post(
            `${KEYCLOAK_URL}/protocol/openid-connect/token`,
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

          await updateOAuthToken(response.data);
          originalRequest.headers['Authorization'] = `Bearer ${response.data.access_token}`;

          return request(originalRequest);
        } catch (error) {
          logout();
        }
      } else {
        logout();
      }
    }

    return Promise.reject(error);
  }
);
