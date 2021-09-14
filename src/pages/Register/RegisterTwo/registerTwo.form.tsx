import * as yup from "yup";
import { cpf, cnpj } from "cpf-cnpj-validator";

export const registerTwoForm = yup.object().shape({
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .test("", "CPF inválido", (value: any): boolean => {
      return cpf.isValid(value);
    }),

  rg: yup.string().required("RG é obrigatório").min(6, "RG inválido"),
});
