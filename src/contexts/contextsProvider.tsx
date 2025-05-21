"use client";
import React, { createContext, ReactNode, useState } from "react";
import StoreProvider from "./StoreProvider";
import { useAppDispatch } from "@/store/hooks";
import { GatewayUseCase } from "@/useCases/gateway.useCases";

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
  setFailPopUp: () => void;
  setSuccessPopUp: () => void;
}>({
  popUpState: popUpInit,
  setPopUpState: () => {},
  setFailPopUp: () => {},
  setSuccessPopUp: () => {},
});

export const UseCaseContext = createContext<GatewayUseCase | null>(null);

export default function ContextsProvider({ children }: ContextProps) {
  const [popUpState, setPopUpState] = useState<PopUp>(popUpInit);

  function setFailPopUp() {
    setPopUpState((prev) => ({
      ...prev,
      message: [...prev.message, "Failure"],
      type: null,
    }));
  }

  function setSuccessPopUp() {
    setPopUpState((prev) => ({
      ...prev,
      message: [...prev.message, "Success"],
      type: null,
    }));
  }

  const dispatch = useAppDispatch();
  const gateway = new GatewayUseCase(dispatch);

  return (
    <>
    <StoreProvider>
      <UseCaseContext.Provider value={gateway}>
          <PopUpContext.Provider value={{ popUpState, setPopUpState, setFailPopUp, setSuccessPopUp }}>
            {children}
          </PopUpContext.Provider>
      </UseCaseContext.Provider>
      </StoreProvider>
    </>
  );
}
