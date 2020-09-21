import React from "react";
import { Link } from "../styles/footer";

export interface FooterLinkProps {
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

export default FooterLink;
