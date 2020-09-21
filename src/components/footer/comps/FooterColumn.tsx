import React from "react";
import { Column } from "../styles/footer";

export interface FooterColumnProps {}

const FooterColumn: React.FC<FooterColumnProps> = ({
  children,
  ...restProps
}) => {
  return <Column {...restProps}>{children}</Column>;
};

export default FooterColumn;
