
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '../contexts/AuthContext';
import { Users, CreditCard, MessageSquare, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const SuperAdminDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">3 urgent, 8 high priority</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+18%</div>
            <p className="text-xs text-muted-foreground">Compared to last quarter</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your CRM platform efficiently</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg hover:bg-accent cursor-pointer">
                <h4 className="font-medium">Add Customer</h4>
                <p className="text-sm text-muted-foreground">Create new customer account</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-accent cursor-pointer">
                <h4 className="font-medium">Feature Control</h4>
                <p className="text-sm text-muted-foreground">Manage HRMS/VMS features</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-accent cursor-pointer">
                <h4 className="font-medium">Billing Review</h4>
                <p className="text-sm text-muted-foreground">Check payment status</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-accent cursor-pointer">
                <h4 className="font-medium">Support Queue</h4>
                <p className="text-sm text-muted-foreground">Monitor active tickets</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest system activities and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">New customer "Acme Corp" registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Payment overdue for "TechStart Inc"</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-blue-500" />
                <span className="text-sm">New support ticket #1234 created</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const SalesAgentDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">Active leads</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,450</div>
            <p className="text-xs text-muted-foreground">Monthly target</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Sales Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Sales funnel and lead management tools will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );

  const SupportAgentDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Assigned to you</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resolved Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Good progress!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5h</div>
            <p className="text-xs text-muted-foreground">Within SLA</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Active Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Your assigned support tickets will be displayed here with real-time chat capabilities.</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderDashboard = () => {
    switch (user?.role) {
      case 'super_admin':
        return <SuperAdminDashboard />;
      case 'sales_agent':
        return <SalesAgentDashboard />;
      case 'support_agent':
        return <SupportAgentDashboard />;
      default:
        return <div>Access denied</div>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your {user?.role.replace('_', ' ')} dashboard
        </p>
      </div>
      
      {renderDashboard()}
    </div>
  );
};

export default Dashboard;
