import React, { useContext } from "react";
import { FeatureContext } from "..";
import {
  Content,
  Feature,
  FeatureClose,
  FeatureText,
  FeatureTitle,
  Group,
  Maturity,
} from "../styles/card";

export interface CardFeatureProps {
  category: string;
}

const CardFeature: React.FC<CardFeatureProps> = ({
  children,
  category,
  ...restProps
}) => {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );
  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...restProps}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText fontWeight="bold">{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature?.(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group flexDirection="row" alignItems="center" margin="30px 0">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};

export default CardFeature;
