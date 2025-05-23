"use client";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";


export function AuthProvider() {
  const login = useUserStore((state) => state.login);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      login(JSON.parse(storedUser));
    }
  }, [login]);

  return null;
}