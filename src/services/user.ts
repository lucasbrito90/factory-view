import axios from 'axios';
import { bool } from 'yup';

export interface RegisterUser {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface RegisterUserError {
    message: string;
    errors: {
        name?: string[];
        email?: string[];
        password?: string[];
        password_confirmation?: string[];
    };
}

const authEndpoint = import.meta.env.VITE_AUTH_ENDPOINT as string;

export async function registerUser(user: RegisterUser): Promise<boolean | RegisterUserError> {
    const response = await axios.post(authEndpoint + 'api/register', user);
    
    if (response.status === 201) {
        return true;
    }

    return response.data;
}