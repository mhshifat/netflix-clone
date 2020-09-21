import React, { useContext } from "react";
import { Header } from "../styles/accordion";
import { AccordionContext } from "./AccordionItem";

export interface AccordionHeaderProps {}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  ...retsProps
}) => {
  const { showAccordionBody, setShowAccordionBody } = useContext(
    AccordionContext
  );

  return (
    <Header
      {...retsProps}
      onClick={() =>
        setShowAccordionBody(
          (((state: boolean) => !state) as unknown) as boolean
        )
      }
    >
      {children}
      {showAccordionBody ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Add" />
      )}
    </Header>
  );
};

export default AccordionHeader;
