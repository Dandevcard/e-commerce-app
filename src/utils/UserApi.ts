// Simulando uma API LOCAL
import type { User } from "../types/types";

// Obter usuários do localStorage
export function getUsers(): User[] {
  if (typeof window !== "undefined") {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }
  return [];
}

// Registrar novo usuário
export function registerUser(newUser: User) {
  const users = getUsers();
  const userExists = users.some((user) => user.email === newUser.email);
  if (userExists) {
    throw new Error("E-mail já cadastrado!");
  }
  const updatedUsers = [...users, newUser];
  localStorage.setItem("users", JSON.stringify(updatedUsers));
}

// Login de usuário
export function loginUser(email: string, password: string): User | null {
  const users = getUsers();
  const user = users.find(
    (u) => u.email === email && u.password === password
  );
  if (!user) {
    throw new Error("E-mail ou senha inválidos");
  }
  return user;
}

// 🔥 Atualizar dados de um usuário no array de users
export function updateUserData(updatedUser: User) {
  const users = getUsers();
  const updatedUsers = users.map((user) =>
    user.id === updatedUser.id ? updatedUser : user
  );
  localStorage.setItem("users", JSON.stringify(updatedUsers));
}
