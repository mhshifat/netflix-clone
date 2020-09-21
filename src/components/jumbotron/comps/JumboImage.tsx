import React from "react";
import { Image } from "../styles/jumbotron";

export interface IJumboImageProps {
  src: string;
  alt: string;
}

const JumboImage: React.FC<IJumboImageProps> = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

export default JumboImage;
