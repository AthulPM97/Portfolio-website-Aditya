import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;

export const AuthProvider = (props) => {

    //states 
    const [token, setToken] = useState('');
    
    const userIsLoggedIn = !!token;

    //handlers
    const loginHandler = (token) => {
        setToken(() => token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {

    }

  const authContext = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
