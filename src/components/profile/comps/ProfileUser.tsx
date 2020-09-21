import React, { HTMLAttributes } from "react";
import { Item } from "../styles/profile";

export interface ProfileUserProps extends HTMLAttributes<HTMLLIElement> {}

const ProfileUser: React.FC<ProfileUserProps> = ({
  children,
  ...restProps
}) => {
  return <Item {...restProps}>{children}</Item>;
};

export default ProfileUser;
