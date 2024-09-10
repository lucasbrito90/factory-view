import { request } from "@/axios";
import type { OAuth2Response, OpenidResponse } from "@/context/enrollment/interfaces/auth";
import { jwtDecode } from "jwt-decode";
import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });
const KEYCLOAK_URL = `${import.meta.env.VITE_AUTH_ENDPOINT}/${import.meta.env.VITE_AUTH_REAML_DEFAULT}`;

export async function refreshToken(): Promise<void> {

    const oAuthToken: OAuth2Response = cookies.get('oAuthToken');

    try {
        const response = await request.post(`${KEYCLOAK_URL}/protocol/openid-connect/token`, {
            grant_type: 'refresh_token',
            client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
            refresh_token: oAuthToken.refresh_token,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        await updateOAuthToken(response.data);

    } catch (error) {
        logout();
    }


}

export async function logout() {

    const oAuthToken: OAuth2Response = cookies.get('oAuthToken');

    if (oAuthToken) {

        await request.post(`/api/realms/${import.meta.env.VITE_AUTH_REAML_DEFAULT}/protocol/openid-connect/revoke`, {
            client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
            token: oAuthToken.refresh_token,
            token_type_hint: 'refresh_token'
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

    }

    cookies.remove('oAuthToken');
    cookies.remove('openidResponse');
}

export async function updateOAuthToken(response: OAuth2Response): Promise<void> {

    if (cookies.get('oAuthToken')) {
        cookies.remove('oAuthToken');
    }

    cookies.set('oAuthToken', response);

    if (response.id_token) {
        cookies.remove('openidResponse');
    }

    const openidResponse: OpenidResponse = jwtDecode(response.id_token);
    cookies.set('openidResponse', openidResponse);
}