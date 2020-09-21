import React from "react";
import AccordionBody, { AccordionBodyProps } from "./comps/AccordionBody";
import AccordionHeader, { AccordionHeaderProps } from "./comps/AccordionHeader";
import AccordionItem, { AccordionItemProps } from "./comps/AccordionItem";
import AccordionTitle, { AccordionTitleProps } from "./comps/AccordionTitle";
import { Container, Inner } from "./styles/accordion";

interface Props {}
type AccordionComComps = {
  Header: React.FC<AccordionHeaderProps>;
  Title: React.FC<AccordionTitleProps>;
  Item: React.FC<AccordionItemProps>;
  Body: React.FC<AccordionBodyProps>;
};

const Accordion: React.FC<Props> & AccordionComComps = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

export default Accordion;

// Accordion Compound Components...
Accordion.Header = AccordionHeader;
Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Body = AccordionBody;
