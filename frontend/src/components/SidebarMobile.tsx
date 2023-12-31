import { cn } from "@/lib/utils";
import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

function useCloseOnOutsideTouch(ref: any, setIsOpen: any) {
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsOpen]);
}

type SidebarToggleProps = {
  setIsOpen: (state: boolean) => void;
  open?: boolean;
};

function SidebarToggle({ setIsOpen, open }: SidebarToggleProps) {
  return (
    <button
      className="border-2 p-2 rounded-lg  block"
      onClick={() => setIsOpen(open ? true : false)}
    >
      {open ? "open" : "close"}
    </button>
  );
}

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const SidebarContext = React.createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => null,
});

export const SidebarMobile = ({ children }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const wrapperRef = React.useRef(null);
  useCloseOnOutsideTouch(wrapperRef, setIsOpen);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="pt-4 pl-4 block sm:hidden">
        <SidebarToggle setIsOpen={setIsOpen} open={true}></SidebarToggle>
        <div
          className={cn(
            "bg-sidebar text-sidebar-foreground h-[100dvh] w-60 absolute inset-0 p-4 transition ease-in-out duration-200",
            isOpen ? "transform translate-x-0" : "transform -translate-x-full"
          )}
          ref={wrapperRef}
        >
          <SidebarToggle setIsOpen={setIsOpen}></SidebarToggle>
          {children ? children : "SidebarMobile"}
        </div>
      </div>
    </SidebarContext.Provider>
  );
};
