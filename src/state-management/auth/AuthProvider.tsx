import { createContext, useReducer } from "react";

function loginReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return action.name;
      break;
    case "LOGOUT":
      return "";
      break;
    default:
      return state;
  }
}
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [value, dispatch] = useReducer(loginReducer, "");

  return (
    <AuthContext.Provider value={{ value, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
