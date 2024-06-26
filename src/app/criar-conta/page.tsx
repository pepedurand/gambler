"use client";
import { Flex, Image } from "@chakra-ui/react";
import { SignUpForm } from "./components/signUpForm";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { redirect } from "next/navigation";
import { primaryColor } from "@/types/colors";

export default function SignUp() {
  const { isUserLoggedIn } = useAuth();

  if (isUserLoggedIn) {
    return redirect("/");
  }

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justify="space-evenly"
      gap="40px"
      style={{ height: "100vh", width: "100vw" }}
      backgroundImage='url("/bet-background.png")'
      backgroundSize="cover"
    >
      <Image src="/logo.png" alt="Gambler AI" width="360px" />
      <SignUpForm />
      <p style={{ marginTop: "20px" }}>
        Já tem uma conta?
        <Link style={{ color: primaryColor, marginLeft: "4px" }} href="/entrar">
          Entrar
        </Link>
      </p>
    </Flex>
  );
}
