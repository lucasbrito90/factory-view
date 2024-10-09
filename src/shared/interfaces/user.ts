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
