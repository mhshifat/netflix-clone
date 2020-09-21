import React, { ButtonHTMLAttributes } from "react";
import { Submit } from "../styles/form";

export interface FormSubmitProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const FormSubmit: React.FC<FormSubmitProps> = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

export default FormSubmit;
