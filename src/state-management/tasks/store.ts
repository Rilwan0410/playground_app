import { create } from "zustand";

const taskStore = create((set) => {
  return {
    tasks: [],

    addTask: () =>
      set(({ tasks }) => ({
        tasks: [...tasks, { id: Date.now(), title: "Task " + Date.now() }],
      })),
    removeTask: (id) =>
      set(({ tasks }) => ({
        tasks: tasks.filter((task) => task.id !== id),
      })),
  };
});

export default taskStore;
