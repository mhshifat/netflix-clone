import React, { ImgHTMLAttributes } from "react";
import { Image } from "../styles/card";

export interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const CardImage: React.FC<CardImageProps> = ({ children, ...restProps }) => {
  return <Image {...restProps} />;
};

export default CardImage;
