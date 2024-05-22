import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpData, signUpSchema } from "@/types/auth";
import { TextInput } from "@/components/textInput";
import { PasswordInput } from "@/components/passwordInput";
import { DateInput } from "@/components/dateInput";
import { signUpUser } from "@/api/auth";
import { useAuth } from "@/context/authContext";
import { redirect } from "next/navigation";

export function SignUpForm() {
  const { isUserLoggedIn } = useAuth();

  const methods = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  if (!isUserLoggedIn) {
    return redirect("/");
  }

  async function onSubmit(data: SignUpData) {
    await signUpUser(data);
  }

  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap="8px" direction="column">
            <TextInput
              label="Nome"
              name="name"
              placeholder="Insira seu nome completo"
            />
            <TextInput
              label="Email"
              name="email"
              placeholder="Insira seu e-mail"
            />
            <DateInput />
            <PasswordInput />
            <PasswordInput isPasswordConfirmation />
          </Flex>
          <Button mt={4} isLoading={isSubmitting} type="submit">
            Entrar
          </Button>
        </form>
      </FormProvider>
    </Box>
  );
}
