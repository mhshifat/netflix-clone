import React, { InputHTMLAttributes } from "react";
import { Input } from "../styles/form";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const FormInput: React.FC<FormInputProps> = ({ children, ...restProps }) => {
  return <Input {...restProps} />;
};

export default FormInput;
