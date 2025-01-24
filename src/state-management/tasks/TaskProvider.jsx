import React from "react";
import { createContext } from "react";

import { useReducer } from "react";

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: action.id, title: action.title }];
      break;
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.id);
      break;
  }
}

const TaskContext = createContext();
export default function TaskProvider({ children }) {
  const [value, dispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ value, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext };
