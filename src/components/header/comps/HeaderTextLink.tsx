import React, { HTMLAttributes } from "react";
import { Link } from "../styles/header";

export interface HeaderTextLinkProps
  extends HTMLAttributes<HTMLParagraphElement> {
  active: boolean;
}

const HeaderTextLink: React.FC<HeaderTextLinkProps> = ({
  children,
  ...restProps
}) => {
  return <Link {...restProps}>{children}</Link>;
};

export default HeaderTextLink;
