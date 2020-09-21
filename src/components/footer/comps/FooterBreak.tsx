import React from "react";
import { Break } from "../styles/footer";

export interface FooterBreakProps {}

const FooterBreak: React.FC<FooterBreakProps> = ({
  children,
  ...restProps
}) => {
  return <Break {...restProps} />;
};

export default FooterBreak;
