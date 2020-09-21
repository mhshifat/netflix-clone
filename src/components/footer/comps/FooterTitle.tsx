import React from "react";
import { Title } from "../styles/footer";

export interface FooterTitleProps {}

const FooterTitle: React.FC<FooterTitleProps> = ({
  children,
  ...restProps
}) => {
  return <Title {...restProps}>{children}</Title>;
};

export default FooterTitle;
