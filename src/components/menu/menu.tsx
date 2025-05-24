"use client";

import { PopUpContext } from "@/contexts/contexts";
import { UiMenu } from "../ui/uiMenu/uiMenu";
import { UiMenuBtn } from "../ui/uiMenuBtn/uiMenuBtn";
import { useContext, useState } from "react";
import useUseCase from "@/hooks/useUseCase";

export const Menu = () => {
  const { gatewayUseCase } = useUseCase();
  const { setFailPopUp, setSuccessPopUp } = useContext(PopUpContext);

  const [hasAPlayerSession, setHasAPlayerSession] = useState<boolean>(false);

  const createGuest = async () => {
    const response = await gatewayUseCase.playerUseCases.createPlayerAsGuest();
    if (response === "Failure") {
      return setFailPopUp("You can't create a guest session");
    }
    setSuccessPopUp("Guest session created");
    setHasAPlayerSession(true);
  };

  const getPlayer = () => {
    console.log(gatewayUseCase.playerUseCases.getPlayer())
  }

  return (
    <>
      <UiMenu title="Chess">
        {!hasAPlayerSession ? (
          <>
            <UiMenuBtn callback={() => {}} text="Login" />
            <UiMenuBtn callback={createGuest} text="New game as guest" />
          </>
        ) : (
          <>
            <UiMenuBtn callback={getPlayer} text="New game" />
          </>
        )}
      </UiMenu>
    </>
  );
};
