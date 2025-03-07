
import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { adminSession } from '@/config/auth';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check session validity when the component mounts or location changes
  useEffect(() => {
    // Skip auth check for login page
    if (location.pathname === '/admin/login') return;
    
    if (!adminSession.isValid()) {
      navigate('/admin/login', { 
        state: { message: 'Please log in to access the admin area' } 
      });
    }
  }, [location, navigate]);

  // Don't render sidebar for login page
  if (location.pathname === '/admin/login') {
    return <Outlet />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
