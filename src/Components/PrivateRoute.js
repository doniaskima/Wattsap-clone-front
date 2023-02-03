import React from 'react';
import { useAuth } from "../Context/authProvider";
import { Redirect } from "react-router-dom";


export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();
  return user == null ? (
    <Redirect from="" to="/" noThrow />
  ) : (
    <Component {...rest} />
  );
}

export default PrivateRoute