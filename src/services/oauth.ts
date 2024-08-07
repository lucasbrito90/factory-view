import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const clientId = '9cca06cf-e26b-42f9-8e4d-5519b56498ed';
const clientSecret = 'aYLcMolnqcyHpFx7yPh0BGjw4optJduVIIN9rLu2';
const redirectUri = 'http://localhost:5173/auth/callback';
const authEndpoint = 'https://authserver-vue.test/oauth/authorize';
const tokenEndpoint = 'https://authserver-vue.test/oauth/token';

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

    authStore.verifier = getVerifier();
    authStore.codeChallenge = await codeChallengeFromVerifier(authStore.verifier);

    const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        response_type: 'code',
        state: authStore.state,
        code_challenge: authStore.codeChallenge,
        code_challenge_method: 'S256',
        // scope: 'openid profile email'
        // prompt: 'consent'
    });

    return `${authEndpoint}?${params.toString()}`;
}

export async function getToken(code: string): Promise<AuthResponse> {
    const response = await axios.post(tokenEndpoint, {
        grant_type: 'authorization_code',
        client_id: clientId,
        redirect_uri: redirectUri,
        code_verifier: authStore.verifier,
        code: code,
    });

    return response.data;
}

function getVerifier(length = 128) {
    const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, (byte) => validChars[byte % validChars.length]).join('');
}
function base64urlEncode(array: Uint8Array) {
    return btoa(String.fromCharCode(...array))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
async function codeChallengeFromVerifier(verifier: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return base64urlEncode(new Uint8Array(hash))
}