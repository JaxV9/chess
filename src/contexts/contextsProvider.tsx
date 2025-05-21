'use client'
import React, { createContext, ReactNode, useEffect, useState } from "react";
import StoreProvider from "./StoreProvider";

type PopUp = {
  message: string[];
  type: string | null;
};
type ContextProps = {
  children: ReactNode;
};

export const popUpInit: PopUp = {
  message: [],
  type: null,
};
export const PopUpContext = createContext<{
  popUpState: PopUp;
  setPopUpState: React.Dispatch<React.SetStateAction<PopUp>>;
}>({
  popUpState: popUpInit,
  setPopUpState: () => {},
});

export default function ContextsProvider({ children }: ContextProps) {
  const [popUpState, setPopUpState] = useState<PopUp>(popUpInit);

  useEffect(() => {
    console.log(popUpState)
  },[popUpState])
  return (
    <>
      <StoreProvider>
        <PopUpContext.Provider value={{ popUpState, setPopUpState }}>
          {children}
        </PopUpContext.Provider>
      </StoreProvider>
    </>
  );
}
