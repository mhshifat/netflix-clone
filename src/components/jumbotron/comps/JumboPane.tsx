import React from "react";
import { Pane } from "../styles/jumbotron";

export interface IJumboPaneProps {}

const JumboPane: React.FC<IJumboPaneProps> = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

export default JumboPane;
