import { Box, Button, Flex } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginData, loginSchema } from "@/types/login";
import { TextInput } from "@/components/textInput";
import { PasswordInput } from "@/components/passwordInput";

export function LoginForm() {
  const methods = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
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
