"use client";
import { signOutUser } from "@/api/auth";
import ActionCard from "@/components/actionCard";
import LoginLeonModal from "@/components/loginLeonModal";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
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
    <Box padding="40px 0">
      <Heading>Bem vindo ao Gambler AI.</Heading>
      {!hasDoneLeonConfig && <LoginLeonModal />}
      <Flex margin="40px 0" gap="12px">
        <ActionCard
          title="Jogar Lighting Roulette"
          description="Jogue e recebe sinais com nossa tecnologia IA para lucrar muito."
        />
        <ActionCard
          title="Como baixar o APP"
          description="Acesse o Gambler AI direto da sua tela de início"
        />
      </Flex>
      <Button>
        <Link href="/jogo" scroll={false}>
          Acessar Jogo
        </Link>
      </Button>
      <Button onClick={() => logout()}>Sair</Button>
    </Box>
  );
}
