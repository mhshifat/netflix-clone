import React from "react";
import { Title } from "../styles/jumbotron";

export interface IJumboTitleProps {}

const JumboTitle: React.FC<IJumboTitleProps> = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export default JumboTitle;
