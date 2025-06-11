"use client";
import "./style.css";
import { PopUpContext } from "@/contexts/contexts";
import { use, useEffect, useState } from "react";

export const PopupUi = () => {
  const { popUpState, setPopUpState } = use(PopUpContext);

  const [isFadeOut, setIsFadeOut] = useState<boolean[]>([]);

  useEffect(() => {
    if (popUpState.message.length === 0) return;
    const index = popUpState.message.length - 1;
    const fade = setTimeout(() => {
      setIsFadeOut((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }, 3000);

    const reset = setTimeout(() => {
      setIsFadeOut((prev) => {
        return [...prev].splice(0,1);
      });
      setPopUpState((prev) => ({
        ...prev,
        message: prev.message.slice(1),
      }));
    }, 5000);
    return () => {
      clearTimeout(fade);
      clearTimeout(reset);
    };
  }, [popUpState.message.length]);

  return (
    <>
      <div className="pop-up-container">
        {popUpState.message?.length > 0
          ? popUpState.message.map((element, index) => (
              <div key={index}
                className={isFadeOut[index] ? "pop-up-fade-out" : "pop-up"}>
                <p>{element}</p>
              </div>
            ))
          : null}
      </div>
    </>
  );
};
