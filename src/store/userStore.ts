import type { User } from "@/types/types";
import { create } from "zustand";
import { updateUserData } from "@/utils/UserApi";

type UserStore = {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (userData) => {
    set({ user: userData, isAuthenticated: true });
    localStorage.setItem("currentUser", JSON.stringify(userData));
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem("currentUser");
  },

  updateUser: (data) => {
    set((state) => {
      if (!state.user) return { user: null };
      const updatedUser = { ...state.user, ...data };

      // 🔥 Atualiza o usuário atual no Zustand e localStorage
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));

      // 🔥 Atualiza no array global de users
      updateUserData(updatedUser);

      return { user: updatedUser };
    });
  },
}));
