import React from "react";
import { SubTitle } from "../styles/jumbotron";

export interface IJumboSubTitleProps {}

const JumboSubTitle: React.FC<IJumboSubTitleProps> = ({
  children,
  ...restProps
}) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default JumboSubTitle;
