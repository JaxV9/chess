"use client";
import "./style.css";

type UiMenuBtnProps = {
    text: string,
    callback: () => unknown,
    isReturn?: boolean,
}

export const UiMenuBtn = ({text, callback, isReturn}:UiMenuBtnProps) => {
  return (
    <>
        <button onClick={() => callback()} className={`menu-start-game-btn ${isReturn ? 'return' : null}`}>{text}</button>
    </>
  );
};
