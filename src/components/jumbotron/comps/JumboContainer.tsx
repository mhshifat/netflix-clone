import React from "react";
import { Container } from "../styles/jumbotron";

export interface IJumboContainerProps {}

const JumboContainer: React.FC<IJumboContainerProps> = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

export default JumboContainer;
