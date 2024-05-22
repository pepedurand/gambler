"use client";
import { Box } from "@chakra-ui/react";
import { LoginForm } from "./components/loginForm";

export default function Login() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <LoginForm />
    </Box>
  );
}
