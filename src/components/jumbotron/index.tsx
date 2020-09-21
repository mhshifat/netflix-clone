import React from "react";
import JumboContainer, { IJumboContainerProps } from "./comps/JumboContainer";
import JumboImage, { IJumboImageProps } from "./comps/JumboImage";
import JumboPane, { IJumboPaneProps } from "./comps/JumboPane";
import JumboSubTitle, { IJumboSubTitleProps } from "./comps/JumboSubTitle";
import JumboTitle, { IJumboTitleProps } from "./comps/JumboTitle";
import { Inner, Item } from "./styles/jumbotron";

interface IJumbotronProps {
  direction?: string;
}
type JumboComComps = {
  Container: React.FC<IJumboContainerProps>;
  Pane: React.FC<IJumboPaneProps>;
  Title: React.FC<IJumboTitleProps>;
  SubTitle: React.FC<IJumboSubTitleProps>;
  Image: React.FC<IJumboImageProps>;
};

const Jumbotron: React.FC<IJumbotronProps> & JumboComComps = ({
  children,
  direction = "row",
  ...restProps
}) => {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

export default Jumbotron;

// Compound Components...
Jumbotron.Container = JumboContainer;
Jumbotron.Pane = JumboPane;
Jumbotron.Title = JumboTitle;
Jumbotron.SubTitle = JumboSubTitle;
Jumbotron.Image = JumboImage;
