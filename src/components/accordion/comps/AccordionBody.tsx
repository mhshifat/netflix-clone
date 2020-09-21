import React, { useContext } from "react";
import { Body } from "../styles/accordion";
import { AccordionContext } from "./AccordionItem";

export interface AccordionBodyProps {}

const AccordionBody: React.FC<AccordionBodyProps> = ({
  children,
  ...retsProps
}) => {
  const { showAccordionBody } = useContext(AccordionContext);

  return showAccordionBody ? <Body {...retsProps}>{children}</Body> : null;
};

export default AccordionBody;
