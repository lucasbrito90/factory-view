import axios from "axios";

export async function getToken(code: string) {


    
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
