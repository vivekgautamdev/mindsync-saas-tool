
export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: 'active' | 'inactive' | 'suspended';
  hrmsPlan: 'free' | 'professional' | 'premium' | null;
  vmsplan: 'free' | 'basic' | 'standard' | 'premium' | null;
  billingStatus: 'current' | 'overdue' | 'suspended';
  createdAt: string;
  apiKey: string;
}

export interface SupportTicket {
  id: string;
  ticketNumber: string;
  title: string;
  description: string;
  customerId: string;
  customerName: string;
  assignedAgentId: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessage {
  id: string;
  ticketId: string;
  senderId: string;
  senderName: string;
  senderType: 'customer' | 'support_agent';
  message: string;
  attachments?: string[];
  timestamp: string;
}

export interface Feature {
  id: string;
  name: string;
  software: 'hrms' | 'vms';
  plan: string;
  isEnabled: boolean;
}
