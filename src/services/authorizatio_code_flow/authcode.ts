// implements the Authorization Code Flow

import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const authStore = useAuthStore();
export const authUrl = await getAuthUrl();

export interface AuthResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope?: string;
}

export async function getAuthUrl() {

    const params = new URLSearchParams({
        client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
        response_type: 'code',
        state: authStore.state,
        // scope: 'openid profile email'
        // prompt: 'consent'
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
    });

    return response.data;
}