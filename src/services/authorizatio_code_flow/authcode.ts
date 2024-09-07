// implements the Authorization Code Flow

import type { AuthResponse } from "@/shared/interfaces/auth";
// import { useAuthStore } from "@/stores/auth";
import axios from "axios";

// const authStore = useAuthStore();
export const authUrl = await getAuthUrl();

export async function getAuthUrl() {

    const nonce = Math
                    .random()
                    .toString(36)
                    .substring(2, 15) + Math.random()
                    .toString(36)
                    .substring(2, 15);

    localStorage.setItem('nonce', nonce);

    const state = Math
                    .random()
                    .toString(36)
                    .substring(2, 15) + Math.random()
                    .toString(36)
                    .substring(2, 15);

    localStorage.setItem('state', state);

    const params = new URLSearchParams({
        client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
        response_type: 'code',
        scope: 'openid',
        nonce,
        state
    });


    return `${import.meta.env.VITE_AUTH_ENDPOINT}?${params.toString()}`;
}

export async function getToken(code: string): Promise<AuthResponse> {
    
    const response = await axios.post(import.meta.env.VITE_TOKEN_ENDPOINT, {
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
        client_secret: import.meta.env.VITE_AUTH_CODE_CLIENT_SECRET,
        redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
        code: code,
        nonce: localStorage.getItem('nonce')
    }, {
        headers: {
            'Content-Type': 'x-www-form-urlencoded'
        }
    });

    return response.data;
}

export async function refreshToken(refreshToken: string): Promise<AuthResponse> {

    const response = await axios.post(import.meta.env.VITE_TOKEN_ENDPOINT, {
        grant_type: 'refresh_token',
        client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
        client_secret: import.meta.env.VITE_AUTH_CODE_CLIENT_SECRET,
        refresh_token: refreshToken,
    });

    return response.data;
}

export async function getUserPermissions(): Promise<string[]> {

    const response = await axios.get(`${import.meta.env.VITE_API_ENROLLMENT}api/roles/user-permissions`);

    return response.data;
}