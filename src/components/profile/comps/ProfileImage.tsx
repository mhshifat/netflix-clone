import React, { ImgHTMLAttributes } from "react";
import { Image } from "../styles/profile";

export interface ProfileImageProps
  extends ImgHTMLAttributes<HTMLImageElement> {}

const ProfileImage: React.FC<ProfileImageProps> = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

export default ProfileImage;
