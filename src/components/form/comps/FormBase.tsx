import React, { HTMLAttributes } from "react";
import { Base } from "../styles/form";

export interface FormBaseProps extends HTMLAttributes<HTMLFormElement> {}

const FormBase: React.FC<FormBaseProps> = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

export default FormBase;
