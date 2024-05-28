import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (username, password) => {
        try {
            /*const response = await axios.post('/api/login', { username, password });
            if (response.status === 200) {
              setIsAuthenticated(true);
            }*/
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = async () => {
        try {
            const response = await axios.post('/api/logout');
            if (response.status === 200) {
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };
    const checkAuth = async () => {
        try {
            const response = await axios.get('/api/checkAuth');
            setIsAuthenticated(response.data.isAuthenticated);
        } catch (error) {
            console.error('Auth check failed:', error);
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);


    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
