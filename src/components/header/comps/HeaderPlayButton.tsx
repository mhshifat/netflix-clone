import React from "react";
import { PlayButton } from "../styles/header";

export interface HeaderPlayButtonProps {}

const HeaderPlayButton: React.FC<HeaderPlayButtonProps> = ({
  children,
  ...restProps
}) => {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

export default HeaderPlayButton;
