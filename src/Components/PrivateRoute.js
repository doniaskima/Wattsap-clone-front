import React from 'react';
import { useAuth } from "../Context/authProvider";
import { Navigate, Outlet } from "react-router-dom";


export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();
  return user == null ? (
    <Navigate to="/" replace />
  ) : (
    <Component {...rest} />
  );
}

export default PrivateRoute
 