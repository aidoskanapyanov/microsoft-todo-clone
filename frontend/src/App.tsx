import { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { CategoryList, SidebarMain, SidebarMobile } from "./components";
import { Completed, Important, MyDay, NoMatch, Planned, Tasks } from "./pages";

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
