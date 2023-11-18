import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const loginNavigation = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginNavigation, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
