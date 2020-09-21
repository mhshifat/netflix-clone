import React from "react";
import { Break } from "../styles/optForm";

export interface OptFormBreakProps {}

const OptFormBreak: React.FC<OptFormBreakProps> = ({ ...restProps }) => {
  return <Break {...restProps} />;
};

export default OptFormBreak;
