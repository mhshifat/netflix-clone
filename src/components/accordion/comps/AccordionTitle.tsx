import React from "react";
import { Title } from "../styles/accordion";

export interface AccordionTitleProps {}

const AccordionTitle: React.FC<AccordionTitleProps> = ({
  children,
  ...retsProps
}) => {
  return <Title {...retsProps}>{children}</Title>;
};

export default AccordionTitle;
