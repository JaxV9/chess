"use client";
import "./style.css";

type MenuLabelProps = {
  text: string;
};

export const MenuLabel = ({ text }: MenuLabelProps) => {
  return (
    <>
      <div>{text}</div>
    </>
  );
};
