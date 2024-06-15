import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const ProtectedRoute = ({ element}) => {
  const token = Cookies.get('user');
  console.log(token)
  
    return token ? element : <Navigate to="/" />;
  
};

export default ProtectedRoute;

  