import { BrowserRouter } from "react-router-dom";
import { SidebarMobile } from "./components/SidebarMobile";

function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <SidebarMobile />
      </div>
    </BrowserRouter>
  );
}

export default App;
