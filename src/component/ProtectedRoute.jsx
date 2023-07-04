import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from '../contexts/Authcontext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;