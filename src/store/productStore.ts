import { create } from "zustand";
import { fetchProducts } from "@/lib/api";
import type { Product } from "@/types/types";
// import type { ProductStore } from "@/types/types";

type ProductStore = {
  products: Product[];
  loading: boolean;
  error: string | null;
  search: string;
  category: string;

  setCategory: (category: string) => void;
  setSearch: (search: string) => void;
  fetchAllProducts: () => Promise<void>;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  search: "",
  category: "",

  setCategory: (category) => set({ category }),
  setSearch: (value) => set({ search: value }),
  
  fetchAllProducts: async () => {
    set({ loading: true, error: null });
    try {
      const products = await fetchProducts();
      set({ products, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));
