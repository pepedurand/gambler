"use client";
import { Flex } from "@chakra-ui/react";
import { LoginForm } from "./components/loginForm";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { redirect } from "next/navigation";

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
      style={{ minHeight: "100vh" }}
    >
      <LoginForm />
      <p style={{ marginTop: "20px" }}>
        Não tem uma conta?
        <Link style={{ color: "green" }} href="/criar-conta">
          Registre-se
        </Link>
      </p>
    </Flex>
  );
}
