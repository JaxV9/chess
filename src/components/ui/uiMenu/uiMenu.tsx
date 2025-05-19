"use client";

export const UiMenu = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
      <section className="menu-section">
        <div className="menu-container">
          <div>
            {children}
          </div>
        </div>
      </section>
    </>
  );
};
