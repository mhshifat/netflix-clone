import React, { useContext } from "react";
import { FeatureContext } from "../index";
import { Item } from "../styles/card";

export interface CardItemProps {
  item: any;
}

const CardItem: React.FC<CardItemProps> = ({
  children,
  item,
  ...restProps
}) => {
  const { setItemFeature, setShowFeature } = useContext(FeatureContext);

  return (
    <Item
      {...restProps}
      onClick={() => {
        setItemFeature?.(item);
        setShowFeature?.(true);
      }}
    >
      {children}
    </Item>
  );
};

export default CardItem;
