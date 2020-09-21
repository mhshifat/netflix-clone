import React from "react";
import FeatureSubTitle, { FeatureSubTitleProps } from "./comps/FeatureSubTitle";
import FeatureTitle, { FeatureTitleProps } from "./comps/FeatureTitle";
import { Container } from "./styles/feature";

interface Props {}
type FeatureComComps = {
  Title: React.FC<FeatureTitleProps>;
  SubTitle: React.FC<FeatureSubTitleProps>;
};

const Feature: React.FC<Props> & FeatureComComps = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Feature;

// Feature Compound Components...
Feature.Title = FeatureTitle;
Feature.SubTitle = FeatureSubTitle;
