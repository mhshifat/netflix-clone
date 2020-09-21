import React from "react";
import OptFormBreak, { OptFormBreakProps } from "./comps/OptFormBreak";
import OptFormButton, { OptFormButtonProps } from "./comps/OptFormButton";
import OptFormInput, { OptFormInputProps } from "./comps/OptFormInput";
import OptFormText, { OptFormTextProps } from "./comps/OptFormText";
import { Container } from "./styles/optForm";

interface Props {}
type OptFormComComps = {
  Input: React.FC<OptFormInputProps>;
  Button: React.FC<OptFormButtonProps>;
  Text: React.FC<OptFormTextProps>;
  Break: React.FC<OptFormBreakProps>;
};

const OptForm: React.FC<Props> & OptFormComComps = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

export default OptForm;

// OptForm Compound Components...
OptForm.Input = OptFormInput;
OptForm.Button = OptFormButton;
OptForm.Text = OptFormText;
OptForm.Break = OptFormBreak;
