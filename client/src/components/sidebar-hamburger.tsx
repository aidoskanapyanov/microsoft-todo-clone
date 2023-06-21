import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Icons } from "./icons";

export default function SidebarHamburger() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="inline-block align-middle p-1 hover:bg-opacity-95 hover:bg-gray-400 rounded-md">
          <Icons.sidebarHamburger className="inline my-auto" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="mt-4 w-auto p-3 border-none bg-gray-700 brightness-90 text-sm">
        Navigation (Ctrl + 1)
        <br />
        Expand Sidebar
      </HoverCardContent>
    </HoverCard>
  );
}
