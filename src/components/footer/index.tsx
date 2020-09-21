import React from "react";
import FooterBreak, { FooterBreakProps } from "./comps/FooterBreak";
import FooterColumn, { FooterColumnProps } from "./comps/FooterColumn";
import FooterLink, { FooterLinkProps } from "./comps/FooterLink";
import FooterRow, { FooterRowProps } from "./comps/FooterRow";
import FooterText, { FooterTextProps } from "./comps/FooterText";
import FooterTitle, { FooterTitleProps } from "./comps/FooterTitle";
import { Container } from "./styles/footer";

interface Props {}
type FooterComComps = {
  Row: React.FC<FooterRowProps>;
  Column: React.FC<FooterColumnProps>;
  Link: React.FC<FooterLinkProps>;
  Title: React.FC<FooterTitleProps>;
  Text: React.FC<FooterTextProps>;
  Break: React.FC<FooterBreakProps>;
};

const Footer: React.FC<Props> & FooterComComps = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Footer;

// Footer Compound Components...
Footer.Row = FooterRow;
Footer.Column = FooterColumn;
Footer.Link = FooterLink;
Footer.Title = FooterTitle;
Footer.Text = FooterText;
Footer.Break = FooterBreak;
