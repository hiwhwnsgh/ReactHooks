import { useEffect, useRef, useState } from "react";
import "./styles.css";



const App = () => {
  const { enablePreve, disablePreve } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePreve}>enablePreve</button>
      <button onClick={disablePreve}>disablePreve</button>
    </div>
  );
};

export default App;
