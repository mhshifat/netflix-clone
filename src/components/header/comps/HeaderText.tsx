import React from "react";
import { Text } from "../styles/header";

export interface HeaderTextProps {}

const HeaderText: React.FC<HeaderTextProps> = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default HeaderText;
