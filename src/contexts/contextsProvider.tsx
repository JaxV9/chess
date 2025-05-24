"use client";
import React, { ReactNode, useState } from "react";
import StoreProvider from "./StoreProvider";
import { PopUp, PopUpContext, popUpInit } from "./contexts";

type ContextProps = {
  children: ReactNode;
};

export default function ContextsProvider({ children }: ContextProps) {
  const [popUpState, setPopUpState] = useState<PopUp>(popUpInit);

  function setFailPopUp(message: string) {
    setPopUpState((prev) => ({
      ...prev,
      message: [...prev.message, message],
      type: null,
    }));
  }

  function setSuccessPopUp(message: string) {
    setPopUpState((prev) => ({
      ...prev,
      message: [...prev.message, message],
      type: null,
    }));
  }

  return (
    <>
      <StoreProvider>
        <PopUpContext.Provider
          value={{ popUpState, setPopUpState, setFailPopUp, setSuccessPopUp }}
        >
          {children}
        </PopUpContext.Provider>
      </StoreProvider>
    </>
  );
}
