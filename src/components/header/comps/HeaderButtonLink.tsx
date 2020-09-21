import React from "react";
import { LinkProps } from "react-router-dom";
import { ButtonLink } from "../styles/header";

export interface HeaderButtonLinkProps extends LinkProps<unknown> {}

const HeaderButtonLink: React.FC<HeaderButtonLinkProps> = ({
  children,
  ...restProps
}) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

export default HeaderButtonLink;
