"use client";

import { PopUpContext } from "@/contexts/contexts";
import { UiMenu } from "../ui/uiMenu/uiMenu";
import { UiMenuBtn } from "../ui/uiMenuBtn/uiMenuBtn";
import { use, useEffect, useState } from "react";
import useUseCase from "@/hooks/useUseCase";
import { CopyField } from "../ui/copyField/copyField";
import { MenuLabel } from "../ui/menuLabel/menuLabel";
import { useRouter } from "next/navigation";

export const Menu = () => {
  const { gatewayUseCase } = useUseCase();
  const { setFailPopUp, setSuccessPopUp } = use(PopUpContext);
  const router = useRouter();

  const token = gatewayUseCase.gameEngineUseCases.getTokenGameSession();
  const [gameSessionLink, setGameSessionLink] = useState<string>("");
  const [hasAPlayerSession, setHasAPlayerSession] = useState<boolean>(false);
  const [gameSessionGenerated, setGameSessionGenerated] = useState<boolean | null>(null);

  const createGuest = async () => {
    const response = await gatewayUseCase.playerUseCases.createPlayerAsGuest();
    if (response === "Failure") {
      return setFailPopUp("You can't create a guest session");
    }
    setSuccessPopUp("Guest session created");
    setHasAPlayerSession(true);
  };

  const generateGameSession = async () => {
    const response = await gatewayUseCase.playerUseCases.newGuestGame();
    if (response === "Failure") {
      return setFailPopUp("You can't create a game session");
    }
    setSuccessPopUp("Game session created");
    setGameSessionGenerated(true)
  };

  useEffect(() => {
  if (typeof window !== "undefined") {
    const baseUrl = window.location.origin;
    setGameSessionLink(`${baseUrl}/game/${token}`);
  }
}, [token]);

  return (
    <>
      <UiMenu title="Chess">
        {/* login or create guest session */}
        {!hasAPlayerSession && (
          <>
            <UiMenuBtn callback={createGuest} text="New game as a guest" />
          </>
        )}
        {/* New game with a friend or a random guy */}
        {hasAPlayerSession && !gameSessionGenerated && (
          <>
            <UiMenuBtn callback={generateGameSession} text="Play locally with a friend" />
            <UiMenuBtn callback={() => {}} isReturn={true} text="Cancel" />
          </>
        )}
        {gameSessionGenerated && (
          <>
            <MenuLabel text="Share the link with your friend" />
            <CopyField field={gameSessionLink} />
            <UiMenuBtn callback={() => router.push(gameSessionLink)} text="Join Game" />
          </>
        )}
      </UiMenu>
    </>
  );
};
