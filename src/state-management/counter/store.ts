import { create } from "zustand";

const counterStore = create((set) => {
  return {
    counter: 0,
    increment: () =>
      set((store) => ({
        counter: store.counter + 1,
      })),
    reset: () => set(() => ({ counter: 0 })),
  };
});

export default counterStore;
