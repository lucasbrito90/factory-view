export interface OAuth2Response {
  access_token: string;
  expires_in: number;
  id_token: string;
  'not-before-policy'?: number;
  refresh_expires_in: number;
  refresh_token: string;
  scope: string;
  session_state?: string;
  token_type?: string;
}

export interface OpenidResponse {
  acr?: string;
  at_hash?: string;
  aud?: string;
  auth_time?: number;
  azp?: string;
  email: string;
  email_verified?: boolean;
  exp?: number;
  family_name?: string;
  given_name?: string;
  iat?: number;
  iss?: string;
  jti?: string;
  name?: string;
  nonce: string;
  preferred_username?: string;
  sid?: string;
  sub?: string;
  typ?: string;
}
