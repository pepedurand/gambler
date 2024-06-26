"use client";
import { signOutUser } from "@/api/auth";
import ActionCard from "@/components/actionCard";
import Header from "@/components/header";
import LoginLeonModal from "@/components/loginLeonModal";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import CasinoIcon from "@mui/icons-material/Casino";
import DownloadIcon from "@mui/icons-material/Download";
import PaymentsIcon from "@mui/icons-material/Payments";
import SchoolIcon from "@mui/icons-material/School";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { isUserLoggedIn } = useAuth();
  const { userHasAccess } = useSubscription();
  const [hasDoneLeonConfig, setHasDoneLeonConfig] = useState(false);

  useEffect(() => {
    const jsonLeonConfig = JSON.parse(
      localStorage.getItem("hasDoneLeonSetup") as string
    );
    const timeDifference = Date.now() - jsonLeonConfig.dateSaved;
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    if (hoursDifference > 2) {
      setHasDoneLeonConfig(false);
    }

    if (jsonLeonConfig.value === true) {
      setHasDoneLeonConfig(true);
    }
  }, []);

  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  if (isUserLoggedIn && !userHasAccess) {
    return redirect("/assinar");
  }

  return (
    <Flex justify="center" direction="column" width="100vw">
      <Header isHome />
      <Flex justify="center" align="center" direction="column" width="auto">
        <Heading size="md">Bem vindo ao Gambler AI.</Heading>
        {!hasDoneLeonConfig && <LoginLeonModal />}
        <SimpleGrid columns={{ base: 1 }} margin="40px 0" gap="12px">
          <ActionCard
            backgroundImage='url("/strategy-bg.png")'
            title="Aprenda estretégias vencedoras"
            icon={<SchoolIcon />}
            onClickDestiny="/jogo"
          />
          <ActionCard
            backgroundImage='url("/download-bg.png")'
            title="Como baixar o APP"
            icon={<DownloadIcon />}
            onClickDestiny="/jogo"
          />
          <ActionCard
            backgroundImage='url("/roulette-bg.png")'
            onClickDestiny="/jogo"
            title="Jogar com sinais de IA"
            icon={<CasinoIcon />}
          />
          <ActionCard
            backgroundImage='url("/payment-bg.png")'
            onClickDestiny="/jogo"
            title="Gerenciar Assinatura"
            icon={<PaymentsIcon />}
          />
        </SimpleGrid>
      </Flex>
      <Text margin="20px 40px" align="center">
        © Gambler IA 2024 - Todos os direitos reservados
      </Text>
    </Flex>
  );
}
