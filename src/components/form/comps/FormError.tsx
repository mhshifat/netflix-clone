import React from "react";
import { Error } from "../styles/form";

export interface FormErrorProps {}

const FormError: React.FC<FormErrorProps> = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

export default FormError;
