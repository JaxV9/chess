"use client";
import React, { createContext } from "react";


export type PopUp = {
  message: string[];
  type: string | null;
};

export const popUpInit: PopUp = {
    message: [],
    type: null,
};

export const PopUpContext = createContext<{
  popUpState: PopUp;
  setPopUpState: React.Dispatch<React.SetStateAction<PopUp>>;
  setFailPopUp: (message: string) => void;
  setSuccessPopUp: (message: string) => void;
}>({
  popUpState: popUpInit,
  setPopUpState: () => {},
  setFailPopUp: () => {},
  setSuccessPopUp: () => {},
});