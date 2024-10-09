import type { AddPermission, RegisterUser, SetUsersNotification } from '@/shared/interfaces/user';
import axios from 'axios';

const authUrl = import.meta.env.VITE_API_ENROLLMENT;

export async function registerUser(user: RegisterUser): Promise<number> {
  const response = await axios.post(`${authUrl}api/user/create`, user);

  return response.status;
}

export async function addPermission(params: AddPermission): Promise<number> {
  const response = await axios.post(`${authUrl}api/user/permissions`, params);

  return response.status;
}

export async function setUsersNotification(params: SetUsersNotification): Promise<number> {
  const response = await axios.post(`${authUrl}api/user/notifications`, params);

  return response.status;
}
