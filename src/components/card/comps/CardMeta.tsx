import React from "react";
import { Meta } from "../styles/card";

export interface CardMetaProps {}

const CardMeta: React.FC<CardMetaProps> = ({ children, ...restProps }) => {
  return <Meta {...restProps}>{children}</Meta>;
};

export default CardMeta;
