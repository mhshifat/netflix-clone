import React from "react";
import { LinkProps } from "react-router-dom";
import { RouterLink } from "../styles/form";

export interface FormLinkProps extends LinkProps {}

const FormLink: React.FC<FormLinkProps> = ({ children, ...restProps }) => {
  return <RouterLink {...restProps}>{children}</RouterLink>;
};

export default FormLink;
