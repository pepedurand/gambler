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
      style={{ minHeight: "100vh", minWidth: "800px" }}
    >
      {isLoadingAuth || (isLoadingSubscription && isUserLoggedIn) ? (
        <Center style={{ minHeight: "100vh" }}>
          <Spinner thickness="4px" speed="0.65s" color="blue.500" size="xl" />
        </Center>
      ) : (
        children
      )}
    </Flex>
  );
}
