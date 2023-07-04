import { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { CategoryList, SidebarMain } from "./components";
import { SidebarMobile } from "./components/SidebarMobile";

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
  const [data, setData] = useState([]);
  const accessToken = "token";

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/todos", {
      headers: {
        method: "GET",
        Authorization: "Bearer " + accessToken,
      },
    });
    const json = await res.json();
    setData(json.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>All</h1>
      {
        <ul>
          {data && data.map((item: any) => <li key={item.id}>{item.title}</li>)}
        </ul>
      }
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
export default App;
