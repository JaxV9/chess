"use client";

import { ReactNode } from "react";

type UiMenuProps = {
  children: ReactNode,
  title: string,
}

export const UiMenu = ({children, title}: UiMenuProps) => {
  return (
    <>
      <section className="menu-section">
        <div className="menu-container">
          <h2>{title}</h2>
          <div>
            {children}
          </div>
        </div>
      </section>
    </>
  );
};
