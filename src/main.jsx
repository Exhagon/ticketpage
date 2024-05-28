import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Loginform/Login.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider, useAuth } from './AuthProvider/AuthProvider.jsx';

const ProtectedRouteWrapper = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};
const router = createBrowserRouter([{
  path: '/',
  element: <Login/>
},
{
  path:"/dashboard",
  element: <ProtectedRouteWrapper><Dashboard/></ProtectedRouteWrapper>
}]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
