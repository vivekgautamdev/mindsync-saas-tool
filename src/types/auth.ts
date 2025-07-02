
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'sales_agent' | 'support_agent';
  avatar?: string;
  isActive: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  role: 'super_admin' | 'sales_agent' | 'support_agent';
}
