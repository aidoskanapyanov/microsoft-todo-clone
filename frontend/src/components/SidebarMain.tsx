import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const SidebarMain = ({ children }: Props) => {
  return (
    <div className="hidden sm:block">
      <h1>SidebarMain</h1>
      {children}
    </div>
  );
};
