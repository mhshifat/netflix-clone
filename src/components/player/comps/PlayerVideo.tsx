import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { PlayerContext } from "../index";
import { Close, Inner, Overlay } from "../styles/player";

export interface PlayerVideoProps {
  src: string;
}

const PlayerVideo: React.FC<PlayerVideoProps> = ({
  children,
  src,
  ...restProps
}) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? createPortal(
        <Overlay onClick={() => setShowPlayer?.(false)} {...restProps}>
          <Inner>
            <video controls id="netflix-player">
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

export default PlayerVideo;
