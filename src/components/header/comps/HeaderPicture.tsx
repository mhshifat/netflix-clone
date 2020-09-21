import React from "react";
import { Picture } from "../styles/header";

export interface HeaderPictureProps {
  src: string;
}

const HeaderPicture: React.FC<HeaderPictureProps> = ({
  children,
  ...restProps
}) => {
  return <Picture {...restProps} />;
};

export default HeaderPicture;
