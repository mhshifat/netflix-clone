import React from "react";
import HeaderButtonLink, {
  HeaderButtonLinkProps,
} from "./comps/HeaderButtonLink";
import HeaderDropdown from "./comps/HeaderDropdown";
import HeaderFeature, { HeaderFeatureProps } from "./comps/HeaderFeature";
import HeaderFeatureCallOut, {
  HeaderFeatureCallOutProps,
} from "./comps/HeaderFeatureCallOut";
import HeaderFrame, { HeaderFrameProps } from "./comps/HeaderFrame";
import HeaderGroup, { HeaderGroupProps } from "./comps/HeaderGroup";
import HeaderLogo, { HeaderLogoProps } from "./comps/HeaderLogo";
import HeaderPicture, { HeaderPictureProps } from "./comps/HeaderPicture";
import HeaderPlayButton, {
  HeaderPlayButtonProps,
} from "./comps/HeaderPlayButton";
import HeaderProfile, { HeaderProfileProps } from "./comps/HeaderProfile";
import HeaderSearch, { HeaderSearchProps } from "./comps/HeaderSearch";
import HeaderText, { HeaderTextProps } from "./comps/HeaderText";
import HeaderTextLink, { HeaderTextLinkProps } from "./comps/HeaderTextLink";
import { Background } from "./styles/header";

interface Props {
  bg?: boolean;
}
type HeaderComComps = {
  Frame: React.FC<HeaderFrameProps>;
  Logo: React.FC<HeaderLogoProps>;
  ButtonLink: React.FC<HeaderButtonLinkProps>;
  Feature: React.FC<HeaderFeatureProps>;
  Text: React.FC<HeaderTextProps>;
  FeatureCallOut: React.FC<HeaderFeatureCallOutProps>;
  FeaturePlayButton: React.FC<HeaderPlayButtonProps>;
  TextLink: React.FC<HeaderTextLinkProps>;
  Group: React.FC<HeaderGroupProps>;
  Picture: React.FC<HeaderPictureProps>;
  Profile: React.FC<HeaderProfileProps>;
  Dropdown: React.FC<HeaderProfileProps>;
  Search: React.FC<HeaderSearchProps>;
};

const Header: React.FC<Props> & HeaderComComps = ({
  children,
  bg = true,
  ...restProps
}) => {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

export default Header;

// Header Compound Components...
Header.Frame = HeaderFrame;
Header.Logo = HeaderLogo;
Header.ButtonLink = HeaderButtonLink;
Header.Feature = HeaderFeature;
Header.Text = HeaderText;
Header.FeatureCallOut = HeaderFeatureCallOut;
Header.FeaturePlayButton = HeaderPlayButton;
Header.TextLink = HeaderTextLink;
Header.Group = HeaderGroup;
Header.Picture = HeaderPicture;
Header.Profile = HeaderProfile;
Header.Dropdown = HeaderDropdown;
Header.Search = HeaderSearch;
