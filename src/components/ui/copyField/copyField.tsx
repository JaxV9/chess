"use client";
import { useEffect, useState } from "react";
import "./style.css";

type CopyFieldProps = {
  field: string;
};

export const CopyField = ({ field }: CopyFieldProps) => {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(field);
    setIsCopy(true);
  };

  useEffect(() => {
    if (isCopy) {
      const timer = setTimeout(() => {
        setIsCopy(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopy]);

  return (
    <>
      <div className="container" onClick={copyToClipboard}>
        <div className="field">{field}</div>
        <div className={isCopy ? "copy-check" : "copy-icon"}></div>
      </div>
    </>
  );
};
