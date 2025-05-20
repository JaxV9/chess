"use client";

type UiMenuBtnProps = {
    text: string,
    callback: () => unknown
}

export const UiMenuBtn = ({text, callback}:UiMenuBtnProps) => {
  return (
    <>
        <button onClick={() => callback()} className="menu-start-game-btn">{text}</button>
    </>
  );
};
