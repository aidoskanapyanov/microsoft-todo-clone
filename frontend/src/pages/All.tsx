import { useEffect, useState } from "react";

export function All() {
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
