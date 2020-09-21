import React, { createContext, useState } from "react";
import PlayerButton, { PlayerButtonProps } from "./comps/PlayerButton";
import PlayerVideo, { PlayerVideoProps } from "./comps/PlayerVideo";
import { Container } from "./styles/player";

interface Props {}
type PlayerComComps = {
  Button: React.FC<PlayerButtonProps>;
  Video: React.FC<PlayerVideoProps>;
};
type PlayerContextProps = {
  showPlayer?: boolean;
  setShowPlayer?: (value: boolean) => void;
};

export const PlayerContext = createContext<PlayerContextProps>({});
const Player: React.FC<Props> & PlayerComComps = ({
  children,
  ...restProps
}) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

export default Player;

// Player Compound Components...
Player.Button = PlayerButton;
Player.Video = PlayerVideo;
