"use client";

import { UiMenu } from "../ui/uiMenu/uiMenu";
import { UiMenuBtn } from "../ui/uiMenuBtn/uiMenuBtn";
import { useContext} from "react";
import { PopUpContext, UseCaseContext } from "@/contexts/contextsProvider";

export const Menu = () => {
  const gatewayUseCase = useContext(UseCaseContext);
  const { setFailPopUp, setSuccessPopUp } = useContext(PopUpContext);

  const createGuest = async () => {
    const response = await gatewayUseCase?.guestUseCases.createGuest();
    if(response?.status === 'Failure'){
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
