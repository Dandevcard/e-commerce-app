"use client";
import React from "react";
import { Input } from "./ui/input";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useProductStore } from "@/store/productStore";

export default function Header() {
  const search = useProductStore((state) => state.search);
  const setSearch = useProductStore((state) => state.setSearch);

  return (
    <header className="flex items-center justify-evenly bg-purple-700 p-4">
      <Link href="/">
        <h1 className="font-mono text-2xl text-white">DanielShoes</h1>
      </Link>
      <div className="bg-white h-11 w-2/5 flex items-center justify-center border border-gray-200 rounded-full p-2">
        <Input
          placeholder="O que você procura?"
          className="border-none font-mono focus-visible:ring-0 text-black focus-visible:ring-offset-0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="ghost" className="border-none cursor-pointer ">
          <Search className=" text-black" size={24} />
        </Button>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/wishlist" className="flex text-base items-center gap-2">
          <Heart className="text-white" size={26} />
          <span className="text-white font-mono text-start hover:text-gray-300">
            lista de desejos
          </span>
        </Link>
        <Link href="/login" className="flex text-base items-center gap-2">
          <User className="text-white" size={26} />
          <span className="text-white text-start font-mono hover:text-gray-300">
            login
          </span>
        </Link>
        <Link href="/cart" className="flex text-base items-center gap-2">
          <ShoppingCart className="text-white hover:text-gray-300" size={26} />
        </Link>
      </div>
    </header>
  );
}
