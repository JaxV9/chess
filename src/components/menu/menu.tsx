"use client";

import { useRef } from "react";
import { UiMenu } from "../ui/uiMenu/uiMenu";
import { UiMenuBtn } from "../ui/uiMenuBtn/uiMenuBtn";
import { GuestUseCases } from "@/useCases/guest.useCases";

export const Menu = () => {
  const guestUseCases = useRef(new GuestUseCases()).current;

  return (
    <>
      <UiMenu>
        <h2>Chess</h2>
        <UiMenuBtn callback={guestUseCases.createGuest} text="New game as guest" />
      </UiMenu>
    </>
  );
};
