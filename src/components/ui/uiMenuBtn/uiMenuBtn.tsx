"use client";

type UiMenuBtnProps = {
    text: string
}

export const UiMenuBtn = ({text}:UiMenuBtnProps) => {
  return (
    <>
        <button className="menu-start-game-btn">{text}</button>
    </>
  );
};
