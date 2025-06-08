"use client";

import { PopUpContext } from "@/contexts/contexts";
import { UiMenu } from "../ui/uiMenu/uiMenu";
import { UiMenuBtn } from "../ui/uiMenuBtn/uiMenuBtn";
import { useContext, useState } from "react";
import useUseCase from "@/hooks/useUseCase";
import { CopyField } from "../ui/copyField/copyField";

export const Menu = () => {
  const { gatewayUseCase } = useUseCase();
  const { setFailPopUp, setSuccessPopUp } = useContext(PopUpContext);

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
            <p>{}</p>
            <CopyField field={gatewayUseCase.gameEngineUseCases.getTokenGameSession()} />
          </>
        )}
      </UiMenu>
    </>
  );
};
