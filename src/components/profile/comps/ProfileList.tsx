import React from "react";
import { List } from "../styles/profile";

export interface ProfileListProps {}

const ProfileList: React.FC<ProfileListProps> = ({
  children,
  ...restProps
}) => {
  return <List {...restProps}>{children}</List>;
};

export default ProfileList;
