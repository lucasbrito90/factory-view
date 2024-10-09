import type { OAuth2Response } from '@/context/enrollment/interfaces/auth';
import axios from 'axios';

export const authUrl = await getAuthUrl();

export async function getAuthUrl() {
  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
    response_type: 'code',
    state: localStorage.getItem('state') || ''
    // scope: 'openid profile email'
    // prompt: 'consent'
  });

  return `${import.meta.env.VITE_AUTH_ENDPOINT}?${params.toString()}`;
}

export async function getToken(code: string): Promise<OAuth2Response> {
  const response = await axios.post(import.meta.env.VITE_TOKEN_ENDPOINT, {
    grant_type: 'authorization_code',
    client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH_CODE_CLIENT_SECRET,
    redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
    code: code
  });

  return response.data;
}

export async function refreshToken(refreshToken: string): Promise<OAuth2Response> {
  const response = await axios.post(import.meta.env.VITE_TOKEN_ENDPOINT, {
    grant_type: 'refresh_token',
    client_id: import.meta.env.VITE_AUTH_CODE_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH_CODE_CLIENT_SECRET,
    refresh_token: refreshToken
  });

  return response.data;
}

export async function getUserPermissions(): Promise<string[]> {
  const response = await axios.get(`${import.meta.env.VITE_API_ENROLLMENT}api/roles/user-permissions`);

  return response.data;
}
