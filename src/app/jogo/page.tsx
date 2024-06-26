"use client";
import Header from "@/components/header";
import { useAuth } from "@/context/authContext";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default function LightningRoulette() {
  const { isUserLoggedIn } = useAuth();

  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  return (
    <Flex justify="center" direction="column" width="100vw">
      <Header />
      <Flex align="center" direction="column">
        <Heading size="md">Lightning Roulette</Heading>
        <Center>
          <iframe
            style={{ minHeight: "80vh", minWidth: "80vw", margin: "40px 0" }}
            src="https://live.leon.red/frontend/evo/r2/"
          />
        </Center>
      </Flex>
    </Flex>
  );
}
