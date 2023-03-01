import { createContext } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;

export const AuthProvider = (props) => {
  const authContext = {
    
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
