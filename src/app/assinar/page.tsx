"use client";
import { signOutUser } from "@/api/auth";
import { useAuth } from "@/context/authContext";
import { Button } from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default function Subscribe() {
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
      Subscription Page<Button onClick={() => logout()}>Sair</Button>
    </>
  );
}
