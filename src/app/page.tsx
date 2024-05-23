"use client";
import { signOutUser } from "@/api/auth";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { Button } from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { isUserLoggedIn, isLoading: isLoadingAuth } = useAuth();
  const { userHasAccess, isLoading: isLoadingSubscription } = useSubscription();

  const isLoading = isLoadingAuth || isLoadingSubscription;

  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  if (!userHasAccess) {
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
