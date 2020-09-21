import React from "react";
import { Group } from "../styles/card";

export interface CardGroupProps {
  flexDirection: string;
  alignItems: string;
  margin: string;
}

const CardGroup: React.FC<CardGroupProps> = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

export default CardGroup;
