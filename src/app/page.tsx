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

  if (isUserLoggedIn && !userHasAccess) {
    return redirect("/assinar");
  }

  async function logout() {
    await signOutUser();
  }

  return (
    <>
      home<Button onClick={() => logout()}>Sair</Button>
    </>
  );
}
