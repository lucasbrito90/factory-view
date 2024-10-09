// Official
import { request } from '@/axios';
import type { AddPermission, RegisterUser, SetUsersNotification, User } from '@/context/enrollment/interfaces/user';
import type { menu } from '@/layouts/dashboard/vertical-sidebar/sidebarItem';
import type { Pagination } from '@/shared/interfaces/Pagination';

const authUrl = import.meta.env.VITE_API_ENROLLMENT;
export async function registerUser(user: RegisterUser): Promise<number> {
  const response = await request.post(`${authUrl}api/user/create`, user);

  return response.status;
}

export async function addPermission(params: AddPermission): Promise<number> {
  const response = await request.post(`${authUrl}api/user/permissions`, params);

  return response.status;
}

export async function setUsersNotification(params: SetUsersNotification): Promise<number> {
  const response = await request.post(`${authUrl}api/user/notifications`, params);

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
export async function listUsers(options: PaginationOptions): Promise<Pagination<User>> {
  const { page = 1, limit = 10, name = '', email = '', role = '', sector = '' } = options;

  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    name,
    email,
    role,
    sector
  });
  const response = await request.get(`/api/users/`, { params });

  return response.data;
}

export async function activeUser(email: string): Promise<number> {
  const response = await request.post(`${authUrl}api/user/active`, { email });

  return response.status;
}

export async function deactiveUser(email: string): Promise<number> {
  const response = await request.post(`${authUrl}api/user/deactivate`, { email });

  return response.status;
}

export async function getUserByEmail(email: string): Promise<User> {
  const response = await request.post(`${authUrl}api/user/get`, { email });

  console.log(response.data);
  return response.data;
}

export async function getUserById(id: string): Promise<User> {
  const response = await request.get(`/api/users/${id}`);

  return response.data;
}

export async function updateUser(user: User): Promise<number> {
  const formData = new FormData();

  Object.keys(user).forEach((key) => {
    if (user[key as keyof User] instanceof File) {
      formData.append(key, user[key as keyof User] as File);
    } else {
      formData.append(key, user[key as keyof User] as string);
    }
  });

  const response = await request.post(`${authUrl}api/user/update`, formData);

  return response.status;
}

export async function getUserPermissions(email: string): Promise<string[]> {
  const response = await request.post(`${authUrl}api/user/permissions/get`, { email });

  return response.data;
}

export async function getUserByAccessToken(): Promise<User> {
  const response = await request.post(`${authUrl}api/user/token/get-user`);

  return response.data;
}

export async function logout(): Promise<number> {
  const response = await request.post(`${authUrl}api/user/logout`);

  return response.status;
}

export interface ChangePassword {
  email: string;
  password: string;
  old_password: string;
  password_confirmation: string;
}

export async function changePassword(params: ChangePassword): Promise<number> {
  const response = await request.post(`${authUrl}api/user/update-password`, params);

  return response.status;
}

export async function getVerificationCode(email: string): Promise<number> {
  const response = await request.post(`${authUrl}api/user/send-email-verification`, { email });

  return response.status;
}

export async function getMenu(id: string): Promise<menu[]> {
  const response = await request.get(`/api/menu/${id}`);

  return response.data;
}
