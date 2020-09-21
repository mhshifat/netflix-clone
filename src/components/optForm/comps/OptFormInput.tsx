import React from "react";
import { Input } from "../styles/optForm";

export interface OptFormInputProps
  extends React.HTMLAttributes<HTMLInputElement> {}

const OptFormInput: React.FC<OptFormInputProps> = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

export default OptFormInput;
