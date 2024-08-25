import type { AddPermission, RegisterUser } from '@/interfaces/user';
import axios from 'axios';

const authUrl =  import.meta.env.VITE_AUTH_API;

export async function registerUser(user: RegisterUser): Promise<number> {

    const response = await axios.post(`${authUrl}api/user/create`, user)

    return response.status;
}

export async function addPermission(params: AddPermission): Promise<number> {
    const response = await axios.post(`${authUrl}api/user/permissions`,  params)

    return response.status;
}
