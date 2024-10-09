import axios from 'axios';

export async function getAllRolesAndPermissions(): Promise<Record<string, string>> {
  const response = await axios.get(`${import.meta.env.VITE_API_ENROLLMENT}api/roles/permissions`);

  return response.data;
}
