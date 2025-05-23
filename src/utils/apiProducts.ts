import type { Product } from "@/types/types";

//buscando os produtos da DummyJSON
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products");
  if (!res) {
    throw new Error("erro ao buscar produtos");
  }
  const data = await res.json();
  return data.products;
}
