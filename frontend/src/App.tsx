import { BrowserRouter } from "react-router-dom";
import { SidebarMobile } from "./components/SidebarMobile";
import { CategoryList, SidebarMain } from "./components";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyDay />} />
          <Route path="important" element={<Important />} />
          <Route path="planned" element={<Planned />} />
          <Route path="all" element={<All />} />
          <Route path="completed" element={<Completed />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function MyDay() {
  return (
    <div>
      <h1>MyDay</h1>
    </div>
  );
}

function Important() {
  return (
    <div>
      <h1>Important</h1>
    </div>
  );
}

function Planned() {
  return (
    <div>
      <h1>Planned</h1>
    </div>
  );
}

function All() {
  return (
    <div>
      <h1>All</h1>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h1>NoMatch</h1>
    </div>
  );
}

function Completed() {
  return (
    <div>
      <h1>Completed</h1>
    </div>
  );
}

function Tasks() {
  return (
    <div>
      <h1>Tasks</h1>
    </div>
  );
}

function Layout() {
  return (
    <div className="sm:flex sm:gap-8">
      <SidebarMain className="p-4 sm:basis-1/5">
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
export default App;
