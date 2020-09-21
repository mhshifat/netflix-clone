import React from "react";
import { Text } from "../styles/form";

export interface FormTextProps {}

const FormText: React.FC<FormTextProps> = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default FormText;
