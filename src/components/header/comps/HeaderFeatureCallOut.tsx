import React from "react";
import { FeatureCallOut } from "../styles/header";

export interface HeaderFeatureCallOutProps {}

const HeaderFeatureCallOut: React.FC<HeaderFeatureCallOutProps> = ({
  children,
  ...restProps
}) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

export default HeaderFeatureCallOut;
