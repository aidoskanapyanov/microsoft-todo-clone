import { useContext, useState } from "react";
import { Category, SidebarContext } from ".";
const data = [
  {
    title: "My Day",
    icon: <span>📅</span>,
    to: "/",
  },
  {
    title: "Important",
    icon: <span>⭐</span>,
    to: "/important",
  },
  {
    title: "Planned",
    icon: <span>📌</span>,
    to: "/planned",
  },
  {
    title: "All",
    icon: <span>📝</span>,
    to: "/all",
  },
  {
    title: "Completed",
    icon: <span>✅</span>,
    to: "/completed",
  },
  {
    title: "Tasks",
    icon: <span>📋</span>,
    to: "/tasks",
  },
];

export const CategoryList = () => {
  const [active, setActive] = useState("My Day");
  const { setIsOpen } = useContext(SidebarContext);

  const onClick = (title: string) => {
    setActive(title);
    setIsOpen(title === active ? true : false);
  };

  return (
    <ul className="flex flex-col items-stretch justify-center gap-1">
      {data.map((item) => {
        return (
          <Category
            key={item.title}
            title={item.title}
            icon={item.icon}
            active={active}
            onClick={onClick}
            to={item.to}
          />
        );
      })}
    </ul>
  );
};
