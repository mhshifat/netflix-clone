import React from "react";
import { SubTitle } from "../styles/feature";

export interface FeatureSubTitleProps {}

const FeatureSubTitle: React.FC<FeatureSubTitleProps> = ({
  children,
  ...restProps
}) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default FeatureSubTitle;
