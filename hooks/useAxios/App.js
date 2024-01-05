import { useEffect, useRef, useState } from "react";
import "./styles.css";
import useAxios from "./useAxios";

const App = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(`Loading : ${loading}\nError: ${error}\nData: ${data}`);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1> hello </h1>
      <h2>{data && data.status}</h2>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
