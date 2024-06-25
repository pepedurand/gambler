"use client";
import { signOutUser } from "@/api/auth";
import LoginLeonModal from "@/components/loginLeonModal";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
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

  const hasDoneLeonConfig = localStorage.getItem("hasDoneLeonSetup") === "true";

  return (
    <Box>
      home
      {!hasDoneLeonConfig && <LoginLeonModal />}
      <Button>
        <Link href="/jogo" scroll={false}>
          Acessar Jogo
        </Link>
      </Button>
      <Button onClick={() => logout()}>Sair</Button>
    </Box>
  );
}
