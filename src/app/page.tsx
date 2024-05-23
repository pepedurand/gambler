"use client";
import { signOutUser } from "@/api/auth";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { Button } from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { isUserLoggedIn } = useAuth();
  const { userHasAccess } = useSubscription();

  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  if (!userHasAccess) {
    return redirect("/assinar");
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
