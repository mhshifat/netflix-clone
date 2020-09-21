import React from "react";
import { TextSmall } from "../styles/form";

export interface FormTextSmallProps {}

const FormTextSmall: React.FC<FormTextSmallProps> = ({
  children,
  ...restProps
}) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

export default FormTextSmall;
