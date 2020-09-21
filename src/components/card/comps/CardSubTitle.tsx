import React from "react";
import { SubTitle } from "../styles/card";

export interface CardSubTitleProps {}

const CardSubTitle: React.FC<CardSubTitleProps> = ({
  children,
  ...restProps
}) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default CardSubTitle;
