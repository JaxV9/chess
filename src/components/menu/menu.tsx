"use client";

import { guestUseCases } from "@/useCases/gateway.useCases";
import { UiMenu } from "../ui/uiMenu/uiMenu";
import { UiMenuBtn } from "../ui/uiMenuBtn/uiMenuBtn";
import { useContext} from "react";
import { PopUpContext } from "@/contexts/contextsProvider";

export const Menu = () => {
  const { setPopUpState } = useContext(PopUpContext);

  const createGuest = async () => {
    const response = await guestUseCases.createGuest();
    if(response.status === 'Failure'){
      setPopUpState(prev => ({
        ...prev,
        message: [...prev.message, "Failure"],
        type: null,
      }));
    }
    setPopUpState(prev => ({
      ...prev,
      message: [...prev.message, "Success"],
      type: null,
    }));
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
