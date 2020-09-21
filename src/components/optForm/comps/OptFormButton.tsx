import React from "react";
import { Button } from "../styles/optForm";

export interface OptFormButtonProps {}

const OptFormButton: React.FC<OptFormButtonProps> = ({
  children,
  ...restProps
}) => {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

export default OptFormButton;
