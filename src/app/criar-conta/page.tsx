"use client";
import { Flex } from "@chakra-ui/react";
import { SignUpForm } from "./components/signUpForm";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { redirect } from "next/navigation";

export default function SignUp() {
  const { isUserLoggedIn } = useAuth();

  if (isUserLoggedIn) {
    return redirect("/");
  }

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <SignUpForm />
      <p style={{ marginTop: "20px" }}>
        Já tem uma conta?{" "}
        <Link style={{ color: "green" }} href="/entrar">
          Entrar
        </Link>
      </p>
    </Flex>
  );
}
