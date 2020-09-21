import React from "react";
import { Profile } from "../styles/header";

export interface HeaderProfileProps {}

const HeaderProfile: React.FC<HeaderProfileProps> = ({
  children,
  ...restProps
}) => {
  return <Profile {...restProps}>{children}</Profile>;
};

export default HeaderProfile;
