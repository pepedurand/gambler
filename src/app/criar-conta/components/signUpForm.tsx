import { Box, Button, Flex } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpData, signUpSchema } from "@/types/login";
import { TextInput } from "@/components/textInput";
import { PasswordInput } from "@/components/passwordInput";
import { DateInput } from "@/components/dateInput";

export function SignUpForm() {
  const methods = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  function onSubmit(data: any) {
    console.log(errors);
    console.log(data);
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
