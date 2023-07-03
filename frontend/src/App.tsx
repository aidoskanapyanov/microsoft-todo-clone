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
    <div className="p-4">
      <SidebarMain>
        <CategoryList />
      </SidebarMain>
      <SidebarMobile>
        <CategoryList />
      </SidebarMobile>
      <Outlet />
    </div>
  );
}
export default App;
