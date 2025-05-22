"use client";
import React from "react";

import { useProductStore } from "@/store/productStore";
import { Menu} from "lucide-react";

const categories = ["Groceries", "Furniture", "Beauty", "Fragrance"];
export default function CategoryFilter() {
  const category = useProductStore((state) => state.category);
  const setCategory = useProductStore((state) => state.setCategory);

  const handleCategoryClick = (cat: string) => {
    if (cat === category) {
      //vai marcar e desmarcar se clicar novamente
      setCategory("");
    } else {
      setCategory(cat);
    }
  };

  return (
    <div className="flex mb-4 w-full h-16 bg-white items-center gap-2">
      <button
        type="button"
        onClick={() => setCategory("")}
        className={`px-4 py-2 text-base font-mono cursor-pointer flex items-center gap-1 ${
          category === "" ? "text-purple-600 font-semibold" : "text-gray-600"
        }`}
      >
       <Menu className={`text-gray-50 ${category === "" ? "text-purple-600" : "text-gray-600"}`} size={22} />
       All categories
      </button>
      {categories.map((cat) => (
        <button
          type="button"
          key={cat}
          onClick={() => handleCategoryClick(cat)}
          className={`px-4 py-2 text-base font-mono cursor-pointer ${
            category === cat ? "text-purple-600 " : "text-gray-600"
          }`}
        >
         |{cat}|
        </button>
      ))}
    </div>
  );
}
