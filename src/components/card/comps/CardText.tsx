import React from "react";
import { Text } from "../styles/card";

export interface CardTextProps {}

const CardText: React.FC<CardTextProps> = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default CardText;
