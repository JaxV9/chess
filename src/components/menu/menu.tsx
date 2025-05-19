"use client";

import { UiMenu } from "../ui/uiMenu/uiMenu";
import { UiMenuBtn } from "../ui/uiMenuBtn/uiMenuBtn";

export const Menu = () => {
  return (
    <>
      <UiMenu>
        <h2>Chess</h2>
        <UiMenuBtn text="New game as guest" />
      </UiMenu>
    </>
  );
};
