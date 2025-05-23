"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/utils/UserApi";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function signin() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    try {
      registerUser({ id: Date.now(), name, email, password });
      alert("Cadastro realizado com sucesso");
      router.push("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl">Cadastro</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Nome</Label>
            <Input
              id="name"
              type="text"
              placeholder="seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full" onClick={handleSignin}>criar conta</Button>
        </CardFooter>
        <CardContent >
            <p className="text-center">Ja possui uma conta? <Link href="/login" className="text-blue-600">Login</Link></p>
        </CardContent>
      </Card>
    </div>
  );
}
