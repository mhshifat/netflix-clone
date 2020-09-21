import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../styles/header";

export interface HeaderLogoProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  to: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({
  children,
  to,
  ...restProps
}) => {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

export default HeaderLogo;
