import React from "react";
import { Container } from "../styles/header";

export interface HeaderFrameProps {}

const HeaderFrame: React.FC<HeaderFrameProps> = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

export default HeaderFrame;
