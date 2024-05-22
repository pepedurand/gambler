"use client";
import { Flex } from "@chakra-ui/react";
import { SignUpForm } from "./components/signUpForm";
import Link from "next/link";

export default function SignUp() {
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
