import React from "react";
import { Title } from "../styles/feature";

export interface FeatureTitleProps {}

const FeatureTitle: React.FC<FeatureTitleProps> = ({
  children,
  ...restProps
}) => {
  return <Title {...restProps}>{children}</Title>;
};

export default FeatureTitle;
