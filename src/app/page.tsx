"use client";
import { signOutUser } from "@/api/auth";
import { getSubscriptionStatus } from "@/api/subscription";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { useGetSubscriptionStatus } from "@/hooks/useGetSubscriptionStatus";
import { Button } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isUserLoggedIn, currentUser } = useAuth();
  const { userHasAccess } = useSubscription();

  // if (!isUserLoggedIn) {
  //   return redirect("/entrar");
  // }

  // if (!userHasAccess) {
  //   console.log("nao tem acesso");
  // return redirect("/assinar");
  // }

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
