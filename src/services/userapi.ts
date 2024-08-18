import axios from 'axios';
import {ref} from 'vue'

export interface RegisterUser {
    first_name: string;
    last_name: string;
    email: string;

    date_of_birth?: string;
    phone_number?: string;
    gender?: string;
    pronoun?: string;
    address?: string;
    country?: string;
    city?: string;
    note?: string;
    sector?: string;
    role?: string;
    image?: File;
}

const authUrl =  import.meta.env.VITE_AUTH_ENDPOINT;

export async function registerUser(user: RegisterUser) {

    const response = await axios.post(`${authUrl}/register`, user)

    console.log(response);
}
