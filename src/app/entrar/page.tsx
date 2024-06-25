"use client";
import { Flex } from "@chakra-ui/react";
import { LoginForm } from "./components/loginForm";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { redirect } from "next/navigation";
import { primaryColor } from "@/types/colors";

export default function Login() {
  const { isUserLoggedIn } = useAuth();

  if (isUserLoggedIn) {
    return redirect("/");
  }

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh", width: "100vw" }}
      backgroundImage='url("/bet-background.png")'
      backgroundSize="cover"
    >
      <LoginForm />
      <p style={{ marginTop: "20px" }}>
        Não tem uma conta?
        <Link
          style={{ color: primaryColor, marginLeft: "4px" }}
          href="/criar-conta"
        >
          Registre-se
        </Link>
      </p>
    </Flex>
  );
}
