import React from "react";
import { Dropdown } from "../styles/header";

export interface HeaderDropdownProps {}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  children,
  ...restProps
}) => {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

export default HeaderDropdown;
