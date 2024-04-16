// src/components/ProtectedRoute.tsx
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;  // Typing for children, which can be any valid React node
}

const isAuthenticated = (): boolean => {
  // Placeholder for your authentication logic
  // For example, check if a user token exists in localStorage
  return Boolean(localStorage.getItem('userToken'));
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
