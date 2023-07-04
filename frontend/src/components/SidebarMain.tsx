import { cn } from "@/lib/utils";
import * as React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const SidebarMain = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "bg-sidebar text-sidebar-foreground h-screen hidden sm:block",
        className
      )}
    >
      {children}
    </div>
  );
};
