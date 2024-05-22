import * as Yup from "yup";

export type LoginData = {
  email: string;
  password: string;
};

export type SignUpData = LoginData & {
  name: string;
  confirmPassword: string;
  birthDate: string;
};

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Insira seu e-mail").email("Email inválido"),
  password: Yup.string().required("Insira a senha"),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .required("Insira seu nome")
    .min(3, "Insira o nome completo"),
  email: Yup.string().required("Insira seu e-mail").email("Email inválido"),
  password: Yup.string().required("Insira a senha"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
  birthDate: Yup.string().required("Insira sua data de nascimento"),
});
