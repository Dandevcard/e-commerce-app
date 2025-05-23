export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  stock: number;
  category: string;
  brand: string;
  // Adicione mais campos se precisar
};
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  // Adicione mais campos se precisar
};
