import { Box, Button, Flex } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginData, loginSchema } from "@/types/auth";
import { TextInput } from "@/components/textInput";
import { PasswordInput } from "@/components/passwordInput";
import { loginUser } from "@/api/auth";
import { redirect } from "next/navigation";
import { useAuth } from "@/context/authContext";

export function LoginForm() {
  const { isUserLoggedIn } = useAuth();

  const methods = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  if (isUserLoggedIn) {
    return redirect("/");
  }

  async function onSubmit(data: LoginData) {
    try {
      await loginUser(data);
    } catch (error) {
      console.log(error, "deu ruim");
    }
  }
  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap="8px" direction="column">
            <TextInput
              label="Email"
              name="email"
              placeholder="Insira seu e-mail"
            />
            <PasswordInput />
          </Flex>
          <Button mt={4} isLoading={isSubmitting} type="submit">
            Entrar
          </Button>
        </form>
      </FormProvider>
    </Box>
  );
}
