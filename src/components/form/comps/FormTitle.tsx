import React from "react";
import { Title } from "../styles/form";

export interface FormTitleProps {}

const FormTitle: React.FC<FormTitleProps> = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export default FormTitle;
