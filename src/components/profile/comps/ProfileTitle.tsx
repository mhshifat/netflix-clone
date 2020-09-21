import React from "react";
import { Title } from "../styles/profile";

export interface ProfileTitleProps {}

const ProfileTitle: React.FC<ProfileTitleProps> = ({
  children,
  ...restProps
}) => {
  return <Title {...restProps}>{children}</Title>;
};

export default ProfileTitle;
