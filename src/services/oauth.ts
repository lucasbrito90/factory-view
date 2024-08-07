import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const clientId = '9ca84dd3-c17d-495e-b48a-aaa9e848aea8';
const clientSecret = 'aYLcMolnqcyHpFx7yPh0BGjw4optJduVIIN9rLu2';
const redirectUri = 'http://localhost:5173/auth/callback';
const authEndpoint = 'https://auth.test/oauth/authorize';
const tokenEndpoint = 'https://auth.test/oauth/token';

const authStore = useAuthStore();

interface AuthResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope?: string;
}

export function getAuthUrl() {
    const params = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        redirect_uri: redirectUri,
        state: authStore.state
    });
    
    return `${authEndpoint}?${params.toString()}`;
}

export async function getToken(code: string): Promise<AuthResponse> {
    const response = await axios.post(tokenEndpoint, {
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        code: code,
        grant_type: 'authorization_code'
    });

    return response.data;
}