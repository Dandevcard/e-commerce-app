"use client";

import React from "react";
import { Input } from "./ui/input";
import { Heart, LogOut, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useProductStore } from "@/store/productStore";
import { useUserStore } from "@/store/userStore";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function Header() {
  const search = useProductStore((state) => state.search);
  const setSearch = useProductStore((state) => state.setSearch);

  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <header className="flex items-center justify-evenly bg-purple-700 p-4">
      <Link href="/">
        <h1 className="font-mono text-2xl text-white">DanielShoes</h1>
      </Link>

      <div className="bg-white h-11 w-2/5 flex items-center justify-center border border-gray-200 rounded-full p-2">
        <Input
          placeholder="O que você procura?"
          className="border-none font-mono focus-visible:ring-0 text-black focus-visible:ring-offset-0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="ghost" className="border-none cursor-pointer">
          <Search className="text-black" size={24} />
        </Button>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/wishlist" className="flex text-base items-center gap-2">
          <Heart className="text-white" size={26} />
          <span className="text-white font-mono text-start hover:text-gray-300">
            lista de desejos
          </span>
        </Link>

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer">
                <Avatar>
                  <AvatarImage
                    src={user.avatar ? user.avatar : "https://github.com/shadcn.png"} 
                    alt={user.name}
                    className="object-cover"
                  />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-5">
              <DropdownMenuItem
                onClick={() => router.push("/profile")}
                className="cursor-pointer hover:bg-purple-500 hover:text-white text-purple-600 flex justify-evenly"
              >
                Perfil
                <User className=" hover:text-white" />
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer text-red-500 hover:bg-red-500 hover:text-white justify-evenly"
              >
                Logout
                <LogOut className="hover:text-white"/>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login" className="flex text-base items-center gap-2">
            <span>
              <User />
            </span>
            <span className="text-white text-start font-mono hover:text-gray-300">
              login
            </span>
          </Link>
        )}

        <Link href="/cart" className="flex text-base items-center gap-2">
          <ShoppingCart className="text-white hover:text-gray-300" size={26} />
        </Link>
      </div>
    </header>
  );
}
