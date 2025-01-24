import { createContext, useReducer } from "react";

function counterReducer(state, action) {
  if (action.type === "INCREMENT") return state + 1;
  //   if (action.type === "DECREMENT") return state - 1;
  if (action.type === "RESET") return 0;
  return state;
}

const CounterContext = createContext();

export default function CounterProvider({ children }) {
  const [value, dispatch] = useReducer(counterReducer, 0);
  return (
    <CounterContext.Provider value={{ value, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext };
