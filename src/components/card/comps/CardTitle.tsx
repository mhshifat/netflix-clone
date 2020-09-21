import React from "react";
import { Title } from "../styles/card";

export interface CardTitleProps {}

const CardTitle: React.FC<CardTitleProps> = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export default CardTitle;
