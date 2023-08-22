import { useState } from "react";
import "./App.css";
import Topbar from "./components/topbar/topbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-background h-screen">
        <Topbar />
      </div>
    </>
  );
}

export default App;
