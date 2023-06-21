import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarHamburger from "./sidebar-hamburger";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <SidebarHamburger />
      </SheetTrigger>
      <SheetContent position={"left"} className="w-5/6 md:w-auto">
        <SheetClose>
          <SidebarHamburger />
        </SheetClose>
        <SheetHeader>
          <SheetTitle>
            <p className="text-start">User Profile</p>
          </SheetTitle>
          <SheetDescription className="text-foreground">
            <span className="flex flex-col gap-1">
              <span className="flex justify-start items-center p-2 hover:bg-gray-700">
                Section
              </span>
              <span className="flex justify-start items-center p-2 hover:bg-gray-700">
                Section
              </span>
              <span className="flex justify-start items-center p-2 hover:bg-gray-700">
                Section
              </span>
              <span className="flex justify-start items-center p-2 hover:bg-gray-700">
                Section
              </span>
              <span className="flex justify-start items-center p-2 hover:bg-gray-700">
                Section
              </span>
            </span>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
