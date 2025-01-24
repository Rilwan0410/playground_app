import { TaskContext } from "./TaskProvider";
import { useContext } from "react";

function useTasks() {
  return useContext(TaskContext);
}

export default useTasks;
