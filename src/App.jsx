import { useState } from "react";
import { CardPoke } from "./components/CardPoke";
import NavBar from "./components/NavBar";
//import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <CardPoke />
    </div>
  );
}

export default App;
