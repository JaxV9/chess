"use client";
import useUseCase from "@/hooks/useUseCase";
import "./style.css";
import { useEffect, useState } from "react";
import { Player } from "@/models/models";

export const PlayerStatus = () => {
  const { selector } = useUseCase();
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    setPlayer(selector.player.player);
  }, [selector.player.player]);

  return (
    <>
      {player ? (
        <div className="hello">
          <p>User name: {player?.username}</p>
        </div>
      ) : null}
    </>
  );
};
