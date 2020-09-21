import React from "react";
import { Text } from "../styles/footer";

export interface FooterTextProps {}

const FooterText: React.FC<FooterTextProps> = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default FooterText;
