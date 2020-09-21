import React, { ImgHTMLAttributes } from "react";
import LoadingReleaseBody from "./comps/LoadingReleaseBody";
import { LockBody, Picture, Spinner } from "./styles/loading";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

const Loading: React.FC<Props> & { ReleaseBody: React.FC<unknown> } = ({
  src,
  ...restProps
}) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
};

export default Loading;

// Loading Compound Components...
Loading.ReleaseBody = LoadingReleaseBody;
