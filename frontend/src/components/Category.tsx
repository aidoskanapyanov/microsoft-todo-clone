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
    <Link to={to}>
      <div
        className={cn(
          "flex flex-row-reverse items-center justify-end gap-2 hover:bg-active active:scale-95",
          active === title && "bg-active hover:bg-active"
        )}
        onClick={() => onClick(title)}
      >
        <h1>{title}</h1>
        <div>{icon}</div>
      </div>
    </Link>
  );
};
