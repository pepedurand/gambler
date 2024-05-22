"use client";
import { signOutUser } from "@/api/auth";
import { useAuth } from "@/context/authContext";
import { Button } from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { isUserLoggedIn } = useAuth();

  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  async function logout() {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error, "deu ruim");
    }
  }

  return (
    <>
      home<Button onClick={() => logout()}>Sair</Button>
    </>
  );
}
