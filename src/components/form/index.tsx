import React from "react";
import FormBase, { FormBaseProps } from "./comps/FormBase";
import FormError, { FormErrorProps } from "./comps/FormError";
import FormInput, { FormInputProps } from "./comps/FormInput";
import FormLink, { FormLinkProps } from "./comps/FormLink";
import FormSubmit, { FormSubmitProps } from "./comps/FormSubmit";
import FormText, { FormTextProps } from "./comps/FormText";
import FormTextSmall, { FormTextSmallProps } from "./comps/FormTextSmall";
import FormTitle, { FormTitleProps } from "./comps/FormTitle";
import { Container } from "./styles/form";

interface Props {}
type FormComComps = {
  Base: React.FC<FormBaseProps>;
  Error: React.FC<FormErrorProps>;
  Title: React.FC<FormTitleProps>;
  Text: React.FC<FormTextProps>;
  TextSmall: React.FC<FormTextSmallProps>;
  Link: React.FC<FormLinkProps>;
  Input: React.FC<FormInputProps>;
  Submit: React.FC<FormSubmitProps>;
};

const Form: React.FC<Props> & FormComComps = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Form;

// Form Compound Components...
Form.Base = FormBase;
Form.Error = FormError;
Form.Title = FormTitle;
Form.Text = FormText;
Form.TextSmall = FormTextSmall;
Form.Link = FormLink;
Form.Input = FormInput;
Form.Submit = FormSubmit;
