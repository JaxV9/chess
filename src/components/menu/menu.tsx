"use client";

import { PopUpContext } from "@/contexts/contexts";
import { UiMenu } from "../ui/uiMenu/uiMenu";
import { UiMenuBtn } from "../ui/uiMenuBtn/uiMenuBtn";
import { useContext} from "react";
import useUseCase from "@/hooks/useUseCase";

export const Menu = () => {

  const { gatewayUseCase } = useUseCase();

  const { setFailPopUp, setSuccessPopUp } = useContext(PopUpContext);

  const createGuest = async () => {
    const response = await gatewayUseCase.playerUseCases.createPlayerAsGuest();
    if(response === 'Failure'){
      return setFailPopUp()
    }
    setSuccessPopUp()
  };

  return (
    <>
      <UiMenu title="Chess">
        <UiMenuBtn callback={() => {}} text="Login" />
        <UiMenuBtn callback={createGuest} text="New game as guest" />
      </UiMenu>
    </>
  );
};
