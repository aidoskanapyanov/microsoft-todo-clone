import { CategoryList, SidebarMain, SidebarMobile } from "@/components";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="sm:flex sm:gap-8">
      <SidebarMain className="py-4 px-2 sm:basis-1/5">
        <CategoryList />
      </SidebarMain>
      <SidebarMobile>
        <CategoryList />
      </SidebarMobile>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
