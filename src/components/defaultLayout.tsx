"use client";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { Box, Center, Flex, Spinner } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const { isLoading: isLoadingAuth, isUserLoggedIn } = useAuth();
  const { isLoading: isLoadingSubscription } = useSubscription();

  return (
    <Flex
      align="center"
      direction="column"
      style={{ minHeight: "100vh", minWidth: "100vw" }}
      background="linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(24,15,5,1) 100%)"
    >
      {isLoadingAuth || (isLoadingSubscription && isUserLoggedIn) ? (
        <Center style={{ minHeight: "100vh", minWidth: "100vw" }}>
          <Spinner thickness="4px" speed="0.65s" color="blue.500" size="xl" />
        </Center>
      ) : (
        children
      )}
    </Flex>
  );
}
