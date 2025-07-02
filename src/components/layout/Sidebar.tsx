
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Briefcase, 
  MessageSquare, 
  CreditCard,
  UserCog,
  BarChart3,
  Shield
} from 'lucide-react';

interface SidebarItem {
  label: string;
  path: string;
  icon: React.ComponentType<any>;
  roles: string[];
}

const sidebarItems: SidebarItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
    roles: ['super_admin', 'sales_agent', 'support_agent']
  },
  {
    label: 'Customer Management',
    path: '/customers',
    icon: Users,
    roles: ['super_admin']
  },
  {
    label: 'Feature Control',
    path: '/features',
    icon: Shield,
    roles: ['super_admin']
  },
  {
    label: 'Sales Agents',
    path: '/sales-agents',
    icon: UserCog,
    roles: ['super_admin']
  },
  {
    label: 'Support Agents',
    path: '/support-agents',
    icon: UserCog,
    roles: ['super_admin']
  },
  {
    label: 'Sales Dashboard',
    path: '/sales',
    icon: BarChart3,
    roles: ['super_admin', 'sales_agent']
  },
  {
    label: 'Support Dashboard',
    path: '/support',
    icon: MessageSquare,
    roles: ['super_admin', 'support_agent']
  },
  {
    label: 'Billing & Payments',
    path: '/billing',
    icon: CreditCard,
    roles: ['super_admin']
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: Settings,
    roles: ['super_admin']
  }
];

const Sidebar: React.FC = () => {
  const { user } = useAuth();

  const filteredItems = sidebarItems.filter(item => 
    user && item.roles.includes(user.role)
  );

  return (
    <div className="w-64 bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-foreground">CRM Platform</h1>
        <p className="text-sm text-muted-foreground capitalize">
          {user?.role.replace('_', ' ')}
        </p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
