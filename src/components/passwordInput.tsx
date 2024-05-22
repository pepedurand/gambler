import { UserSubmitForm } from "@/types/login";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function PasswordInput() {
  const [show, setShow] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSubmitForm>();

  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={!!errors.password}>
      <FormLabel htmlFor="password">Senha</FormLabel>
      <InputGroup size="md">
        <Input
          {...register("password")}
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Insira sua senha"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Esconder" : "Exibir"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
    </FormControl>
  );
}
