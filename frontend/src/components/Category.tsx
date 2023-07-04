import { cn } from "@/lib/utils";
import * as React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  icon: React.ReactNode;
  active: string;
  onClick: (title: string) => void;
  to: string;
}

export const Category = ({ title, icon, active, onClick, to }: Props) => {
  return (
    <Link to={to} onClick={() => onClick(title)}>
      <div
        className={cn(
          "rounded-sm hover:bg-active",
          active === title && "bg-active hover:bg-active"
        )}
      >
        <div className="pr-4 py-2 flex flex-row-reverse items-center justify-end gap-2 transition-all ease-in duration-100 active:scale-95">
          <h1 className="font-medium">{title}</h1>
          <div>{icon}</div>
          <div
            className={cn(
              "w-1 h-5 rounded-full",
              active === title && "bg-cyan-50"
            )}
          ></div>
        </div>
      </div>
    </Link>
  );
};
