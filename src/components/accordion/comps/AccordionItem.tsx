import React, { createContext, useState } from "react";
import { Item } from "../styles/accordion";

export interface AccordionItemProps {}

export const AccordionContext = createContext<{
  showAccordionBody: boolean;
  setShowAccordionBody: (value: boolean) => void;
}>({
  showAccordionBody: false,
  setShowAccordionBody: () => {},
});
const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  ...retsProps
}) => {
  const [showAccordionBody, setShowAccordionBody] = useState(false);

  return (
    <AccordionContext.Provider
      value={{ showAccordionBody, setShowAccordionBody }}
    >
      <Item {...retsProps}>{children}</Item>
    </AccordionContext.Provider>
  );
};

export default AccordionItem;
