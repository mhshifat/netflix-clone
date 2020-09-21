import React from "react";
import { Text } from "../styles/optForm";

export interface OptFormTextProps {}

const OptFormText: React.FC<OptFormTextProps> = ({
  children,
  ...restProps
}) => {
  return <Text {...restProps}>{children}</Text>;
};

export default OptFormText;
