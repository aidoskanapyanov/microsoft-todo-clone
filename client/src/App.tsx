import Sidebar from "@/components/sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="p-6">
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
