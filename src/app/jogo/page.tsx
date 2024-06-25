"use client";
import { useAuth } from "@/context/authContext";
import { Box } from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default function LightningRoulette() {
  const { isUserLoggedIn } = useAuth();

  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  return (
    <Box>
      <iframe
        width="1280px"
        height="1080px"
        src="https://live.leon.red/frontend/evo/r2/"
      />
    </Box>
  );
}
