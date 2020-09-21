import React from "react";
import { Group } from "../styles/header";

export interface HeaderGroupProps {}

const HeaderGroup: React.FC<HeaderGroupProps> = ({
  children,
  ...restProps
}) => {
  return <Group {...restProps}>{children}</Group>;
};

export default HeaderGroup;
