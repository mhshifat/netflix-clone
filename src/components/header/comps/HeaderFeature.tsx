import React from "react";
import { Feature } from "../styles/header";

export interface HeaderFeatureProps {}

const HeaderFeature: React.FC<HeaderFeatureProps> = ({
  children,
  ...restProps
}) => {
  return <Feature {...restProps}>{children}</Feature>;
};

export default HeaderFeature;
