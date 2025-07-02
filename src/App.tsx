
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import LoginForm from "./components/auth/LoginForm";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/*" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="customers" element={
                <ProtectedRoute allowedRoles={['super_admin']}>
                  <div>Customer Management - Coming Soon</div>
                </ProtectedRoute>
              } />
              <Route path="features" element={
                <ProtectedRoute allowedRoles={['super_admin']}>
                  <div>Feature Control - Coming Soon</div>
                </ProtectedRoute>
              } />
              <Route path="sales-agents" element={
                <ProtectedRoute allowedRoles={['super_admin']}>
                  <div>Sales Agent Management - Coming Soon</div>
                </ProtectedRoute>
              } />
              <Route path="support-agents" element={
                <ProtectedRoute allowedRoles={['super_admin']}>
                  <div>Support Agent Management - Coming Soon</div>
                </ProtectedRoute>
              } />
              <Route path="sales" element={
                <ProtectedRoute allowedRoles={['super_admin', 'sales_agent']}>
                  <div>Sales Dashboard - Coming Soon</div>
                </ProtectedRoute>
              } />
              <Route path="support" element={
                <ProtectedRoute allowedRoles={['super_admin', 'support_agent']}>
                  <div>Support Dashboard - Coming Soon</div>
                </ProtectedRoute>
              } />
              <Route path="billing" element={
                <ProtectedRoute allowedRoles={['super_admin']}>
                  <div>Billing & Payments - Coming Soon</div>
                </ProtectedRoute>
              } />
              <Route path="settings" element={
                <ProtectedRoute allowedRoles={['super_admin']}>
                  <div>Settings - Coming Soon</div>
                </ProtectedRoute>
              } />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
