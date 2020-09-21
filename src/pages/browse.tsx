import React from "react";
import BrowseContainer from "../containers/browse";
import useContent from "../hooks/useContent";
import { selectionMap } from "../utils/selectionMap";

const Browse = () => {
  const { films } = useContent("films");
  const { series } = useContent("series");

  const slides = selectionMap({ series, films });

  return <BrowseContainer slides={slides} />;
};

export default Browse;
