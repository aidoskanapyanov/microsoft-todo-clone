import { cn } from "@/lib/utils";
import * as React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const SidebarMain = ({ children, className }: Props) => {
  return (
    <div className={cn("hidden sm:block", className)}>
      <h1>SidebarMain</h1>
      {children}
    </div>
  );
};
