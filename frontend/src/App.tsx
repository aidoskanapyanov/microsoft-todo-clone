import { BrowserRouter } from "react-router-dom";
import { SidebarMobile } from "./components/SidebarMobile";
import { SidebarMain } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <SidebarMain />
        <SidebarMobile />
      </div>
    </BrowserRouter>
  );
}

export default App;
