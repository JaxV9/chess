"use client";

import { guestUseCases } from "@/useCases/gateway.useCases";
import { UiMenu } from "../ui/uiMenu/uiMenu";
import { UiMenuBtn } from "../ui/uiMenuBtn/uiMenuBtn";

export const Menu = () => {
  const createGuest = async () => {
    return await guestUseCases.createGuest()
  };

  return (
    <>
      <UiMenu>
        <h2>Chess</h2>
        <UiMenuBtn callback={createGuest} text="New game as guest" />
      </UiMenu>
    </>
  );
};
