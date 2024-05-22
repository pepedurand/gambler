import { SignUpData } from "@/types/login";
import {
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface TextInputProps {
  label: string;
  name: "password" | "email" | "name" | "confirmPassword" | "birthDate";
  placeholder: string;
}

export function TextInput({ label, name, placeholder }: TextInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpData>();
  return (
    <FormControl isInvalid={!!errors[name]}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input {...register(name)} pr="4.5rem" placeholder={placeholder} />
      <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
    </FormControl>
  );
}
