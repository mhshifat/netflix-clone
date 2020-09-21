import React from "react";
import { Row } from "../styles/footer";

export interface FooterRowProps {}

const FooterRow: React.FC<FooterRowProps> = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>;
};

export default FooterRow;
