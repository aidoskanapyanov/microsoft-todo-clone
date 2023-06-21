import SidebarHamburger from "@/components/sidebar-hamburger";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="p-6">
        <SidebarHamburger />
      </div>
    </BrowserRouter>
  );
}

export default App;
