import React from "react";
import { Entities } from "../styles/card";

export interface CardEntitiesProps {}

const CardEntities: React.FC<CardEntitiesProps> = ({
  children,
  ...restProps
}) => {
  return <Entities {...restProps}>{children}</Entities>;
};

export default CardEntities;
