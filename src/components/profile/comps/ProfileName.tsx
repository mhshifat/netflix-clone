import React from "react";
import { Name } from "../styles/profile";

export interface ProfileNameProps {}

const ProfileName: React.FC<ProfileNameProps> = ({
  children,
  ...restProps
}) => {
  return <Name {...restProps}>{children}</Name>;
};

export default ProfileName;
