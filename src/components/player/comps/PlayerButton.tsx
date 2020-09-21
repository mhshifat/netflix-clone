import React, { useContext } from "react";
import { PlayerContext } from "../index";
import { Button } from "../styles/player";

export interface PlayerButtonProps {}

const PlayerButton: React.FC<PlayerButtonProps> = ({
  children,
  ...restProps
}) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button
      {...restProps}
      onClick={() =>
        setShowPlayer?.(
          (((showPlayer: boolean) => !showPlayer) as unknown) as boolean
        )
      }
    >
      Play
    </Button>
  );
};

export default PlayerButton;
