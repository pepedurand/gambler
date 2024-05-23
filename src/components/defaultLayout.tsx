"use client";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const { isLoading: isLoadingAuth } = useAuth();
  const { isLoading: isLoadingSubscription } = useSubscription();

  return (
    <Box style={{ minHeight: "100vh", minWidth: "100vw" }}>
      {isLoadingAuth || isLoadingSubscription ? (
        <Center style={{ minHeight: "100vh" }}>
          <Spinner thickness="4px" speed="0.65s" color="blue.500" size="xl" />
        </Center>
      ) : (
        children
      )}
    </Box>
  );
}