import * as Yup from "yup";

export type UserSubmitForm = {
  email: string;
  password: string;
};

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Insira seu e-mail").email("Email inválido"),
  password: Yup.string().required("Insira a senha"),
});
