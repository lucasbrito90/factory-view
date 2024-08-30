import type { AddPermission, RegisterUser, SetUsersNotification, User } from '@/context/enrollment/interfaces/user';
import type { Pagination } from '@/shared/interfaces/Pagination';
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

export async function setUsersNotification(params: SetUsersNotification): Promise<number> {
    const response = await axios.post(`${authUrl}api/user/notifications`, params)

    return response.status;
}

interface PaginationOptions {
    page?: number;
    limit?: number;
    name?: string;
    email?: string;
    role?: string;
    sector?: string;
}
export async function listUsers(options : PaginationOptions): Promise<Pagination<User>> {

    const {
        page = 1,
        limit = 10,
        name = '',
        email = '',
        role = '',
        sector = ''
    } = options;

    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        name,
        email,
        role,
        sector
    });
    const response = await axios.get(`${authUrl}api/user/list`, { params })

    return response.data;
}

export async function activeUser(email: string): Promise<number> {
    const response = await axios.post(`${authUrl}api/user/active`, { email })

    return response.status;
}

export async function deactiveUser(email: string): Promise<number> {
    const response = await axios.post(`${authUrl}api/user/deactivate`, { email })

    return response.status;
}

export async function getUserByEmail(email: string): Promise<User> {
    const response = await axios.post(`${authUrl}api/user/get`, { email })

    return response.data;
}

export async function updateUser(user: User): Promise<number> {
    const response = await axios.post(`${authUrl}api/user/update`, user)

    return response.status;
}

export async function getUserPermissions(email: string): Promise<string[]> {
    const response = await axios.post(`${authUrl}api/user/permissions/get`, { email })

    return response.data;
}
