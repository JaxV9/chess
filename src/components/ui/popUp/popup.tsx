"use client";
import { PopUpContext } from "@/contexts/contextsProvider";
import { useContext, useEffect, useState } from "react";

export const PopupUi = () => {
  const { popUpState, setPopUpState } = useContext(PopUpContext);

  const [isFadeOut, setIsFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const fade = setTimeout(() => {
      setIsFadeOut(true);
    }, 3000);
    const reset = setTimeout(() => {
      setIsFadeOut(false);
      setPopUpState((prev) => ({
        ...prev,
        message: prev.message.slice(1),
      }));
    }, 5000);
    return () => {
      clearTimeout(fade);
      clearTimeout(reset);
    };
  }, [popUpState]);

  return (
    <>
      {popUpState.message?.length > 0 ?
          popUpState.message.map((element, index) => (
            <div key={index} className={isFadeOut ? "popUpContainerFadeOut" : "popUpContainer"}>
              <p>{element}</p>
            </div>
          ))
        : null}
    </>
  );
};
