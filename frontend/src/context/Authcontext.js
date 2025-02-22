import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    localStorage.setItem('token', token); // Armazena o token
    setUser({ token }); // Define o usuário como autenticado
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove o token
    setUser(null); // Define o usuário como não autenticado
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Crie o hook useAuth
export const useAuth = () => {
  return useContext(AuthContext);
};