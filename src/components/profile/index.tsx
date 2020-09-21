import React from "react";
import ProfileImage, { ProfileImageProps } from "./comps/ProfileImage";
import ProfileList, { ProfileListProps } from "./comps/ProfileList";
import ProfileName, { ProfileNameProps } from "./comps/ProfileName";
import ProfileTitle, { ProfileTitleProps } from "./comps/ProfileTitle";
import ProfileUser, { ProfileUserProps } from "./comps/ProfileUser";
import { Container } from "./styles/profile";

interface Props {}
type ProfileComComps = {
  Title: React.FC<ProfileTitleProps>;
  List: React.FC<ProfileListProps>;
  User: React.FC<ProfileUserProps>;
  Image: React.FC<ProfileImageProps>;
  Name: React.FC<ProfileNameProps>;
};

const Profile: React.FC<Props> & ProfileComComps = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Profile;

// Profile Compound Components...
Profile.Title = ProfileTitle;
Profile.List = ProfileList;
Profile.User = ProfileUser;
Profile.Image = ProfileImage;
Profile.Name = ProfileName;
