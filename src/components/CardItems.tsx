"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import { Card } from "./ui/card";
import { useRouter } from "next/navigation";

export default function CardItems() {
  
  const router = useRouter();
  const { products, fetchAllProducts, loading, error, search, category } =
    useProductStore();

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  //filtro do input do header de pesquisa
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category
        ? product.category.toLowerCase().includes(category.toLowerCase())
        : true
    );

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="grid grid-cols-4 gap-4 px-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Card
            key={product.id}
            onClick={()=> router.push(`/${product.category}/${product.id}`)}
            className="border rounded-md p-4 bg-gray-100 flex flex-col cursor-pointer gap-2 hover:scale-105 transition-transform"
          >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-36 h-36 object-cover mx-auto"
              />

              <h2 className="font-bold">{product.title}</h2>
              <span>{product.brand}</span>
              <p className="text-sm text-justify text-muted-foreground max-w-[270px]">
                {product.description}
              </p>
              <span className="font-semibold">${product.price}</span>
          </Card>
        ))
      ) : (
        <div className="col-span-3 text-center">Nenhum produto encontrado.</div>
      )}
    </div>
  );
}
