import React, { createContext, useState } from "react";
import CardEntities, { CardEntitiesProps } from "./comps/CardEntities";
import CardFeature, { CardFeatureProps } from "./comps/CardFeature";
import CardGroup, { CardGroupProps } from "./comps/CardGroup";
import CardImage, { CardImageProps } from "./comps/CardImage";
import CardItem, { CardItemProps } from "./comps/CardItem";
import CardMeta, { CardMetaProps } from "./comps/CardMeta";
import CardSubTitle, { CardSubTitleProps } from "./comps/CardSubTitle";
import CardText, { CardTextProps } from "./comps/CardText";
import CardTitle, { CardTitleProps } from "./comps/CardTitle";
import { Container } from "./styles/card";

interface FeatureContextState {
  showFeature?: boolean;
  setShowFeature?: (value: boolean) => void;
  itemFeature?: any;
  setItemFeature?: (value: any) => void;
}
interface Props {}
type CardComComps = {
  Title: React.FC<CardTitleProps>;
  SubTitle: React.FC<CardSubTitleProps>;
  Text: React.FC<CardTextProps>;
  Meta: React.FC<CardMetaProps>;
  Item: React.FC<CardItemProps>;
  Image: React.FC<CardImageProps>;
  Group: React.FC<CardGroupProps>;
  Entities: React.FC<CardEntitiesProps>;
  Feature: React.FC<CardFeatureProps>;
};

export const FeatureContext = createContext<FeatureContextState>({});
const Card: React.FC<Props> & CardComComps = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

export default Card;

// Card Compound Components...
Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Text = CardText;
Card.Meta = CardMeta;
Card.Item = CardItem;
Card.Image = CardImage;
Card.Group = CardGroup;
Card.Entities = CardEntities;
Card.Feature = CardFeature;
