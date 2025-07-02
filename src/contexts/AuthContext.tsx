
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState, LoginCredentials } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for development
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@crm.com',
    name: 'Super Administrator',
    role: 'super_admin',
    isActive: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    email: 'sales@crm.com',
    name: 'Sales Agent',
    role: 'sales_agent',
    isActive: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    email: 'support@crm.com',
    name: 'Support Agent',
    role: 'support_agent',
    isActive: true,
    createdAt: new Date().toISOString()
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth data
    const storedUser = localStorage.getItem('crm_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    
    // Mock authentication
    const foundUser = mockUsers.find(
      u => u.email === credentials.email && u.role === credentials.role
    );
    
    if (foundUser) {
      setUser(foundUser);
      setIsAuthenticated(true);
      localStorage.setItem('crm_user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('crm_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoading,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
