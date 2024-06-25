export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    username: string;
    success: boolean;
    message: string;
  }