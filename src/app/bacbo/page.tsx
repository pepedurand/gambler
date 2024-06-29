"use client";
import Header from "@/components/header";
import OpenGameModal from "@/components/openGameModal";
import { useAuth } from "@/context/authContext";
import { useValidateJsonKey } from "@/hooks/useValidateJsonKey";
import { primaryColor } from "@/types/colors";
import {
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { redirect } from "next/navigation";

const gameName = "BacBo";

export default function BacBo() {
  const { isUserLoggedIn } = useAuth();
  const { isKeyValidated } = useValidateJsonKey(`hasDone${gameName}Setup`);
  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  return (
    <Flex justify="center" direction="column" width="100vw">
      <Header />
      {!isKeyValidated && <OpenGameModal gameName={gameName} />}
      <Flex gap="40px" align="center" direction="column">
        <Flex gap="12px" direction="column" align="center" justify="center">
          <Flex gap="8px" align="center">
            <Image
              src="roulette-icon.png"
              alt="Icone de roleta"
              width="20px"
              height="20px"
            />
            <Text>
              <b>Bac Bo</b>
            </Text>
          </Flex>
          <Text>Assertividade</Text>
          <CircularProgress
            size="60px"
            fill="transparent"
            max={70}
            value={40}
            color={primaryColor}
          >
            <CircularProgressLabel>70%</CircularProgressLabel>
          </CircularProgress>
          <Button color={primaryColor} variant="outline">
            Gerar sinal
          </Button>
        </Flex>
        <Center>
          <iframe
            style={{
              minHeight: "80vh",
              minWidth: "80vw",
              marginBottom: "40px",
            }}
            src="https://live.leon.red/frontend/evo/r2/"
          />
        </Center>
      </Flex>
    </Flex>
  );
}
