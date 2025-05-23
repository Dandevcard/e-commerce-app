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
import { useUserStore } from "@/store/userStore";
import { loginUser } from "@/utils/UserApi";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const login = useUserStore((state) => state.login);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    try {
      const user = loginUser(email, password);
      if (user) {
        login(user);
        router.push("/");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
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
          <Button className="w-full" onClick={handleLogin}>
            Entrar{" "}
          </Button>
        </CardFooter>
        <CardContent>
          <span className="flex justify-center">
            Ainda nao possui uma conta?
            <Link className="text-blue-600" href="/signin">
               Cadastrar
            </Link>
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
