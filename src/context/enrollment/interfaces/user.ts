export interface UserRepresentation {
  email: string;
  firstName: string;
  lastName: string;
}
export interface RegisterUser {
  name: string;
  email: string;
  date_of_birth?: string;
  phone_number?: string;
  address?: string;
  country?: string;
  city?: string;
  note?: string;
  sector?: string;
  role?: string;
}

export interface AddPermission {
  email: string;
  permissions: string[];
}

export interface SetUsersNotification {
  email: string;
  email_notifications: boolean;
  sms_notifications: boolean;
  web_notifications: boolean;
}

export interface Permissions {
  id: string;
  name: string;
}

export interface Phone {
  id: string;
  country_code: string;
  number: string;
  extension: string;
  is_primary: boolean;
}

export interface User {
  id: string;
  name?: string;
  email: string;
  date_of_birth?: string;
  language?: string;
  role?: string;
  sector?: string;
  email_notifications?: boolean;
  sms_notifications?: boolean;
  web_notifications?: boolean;
  completed_steps?: number;
  created_at?: string;
  updated_at?: string;
  permissions: Permissions[];
  address?: [];
  phones?: Phone[];
  avatar?: File | null | string;
}
