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

export interface User {
    address?: string;
    city?: string;
    country?: string;
    created_at?: string;
    date_of_birth?: string;
    email: string;
    email_notifications?: number;
    email_verified_at?: string;
    id: number;
    language?: string;
    name?: string;
    phone_number?: string;
    postal_code?: string;
    role?: string;
    sector?: string;
    sms_notifications?: number;
    state_province?: string;
    updated_at?: string;
    avatar?: File | undefined;
    completion_percentage?: number;
    active?: boolean;
    web_notifications?: number;
}