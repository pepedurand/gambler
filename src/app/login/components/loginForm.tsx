import { Box, Button } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSubmitForm, loginSchema } from "@/types/login";
import TextInput from "@/components/textInput";
import PasswordInput from "@/components/passwordInput";

export function LoginForm() {
  const methods = useForm<UserSubmitForm>({
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
    <Box style={{ maxWidth: "300px" }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email"
            name="email"
            placeholder="Insira seu e-mail"
          />
          <PasswordInput />
          <Button mt={4} isLoading={isSubmitting} type="submit">
            Entrar
          </Button>
        </form>
      </FormProvider>
    </Box>
  );
}
