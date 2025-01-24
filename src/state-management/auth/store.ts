import { create } from "zustand";

const authStore = create((set) => {
  return {
    currentUser: "",
    login: () =>
      set(() => ({
        currentUser: "rilwan.etti",
      })),
    logout: () =>
      set(() => ({
        currentUser: "",
      })),
  };
});

export default authStore;
