import { useState } from "react";
import "./styles.css";

export default function App() {
  console.log("RENDER");

  let normalCounter = 0;

  const [stateCounter, setStateCounter] = useState(0);

  function increaseNormal() {
    normalCounter++;
    console.log("normalCounter:", normalCounter);
  }

  function increaseState() {
    setStateCounter(stateCounter + 1);
  }

  function setSameState() {
    setStateCounter(stateCounter);
  }

  return (
    <div className="app">
      <h1>React render demo</h1>

      <p>State counter: {stateCounter}</p>
      <button onClick={increaseState}>Increase STATE</button>
      <button onClick={setSameState}>Set SAME state</button>

      <hr />

      <p>Normal counter: {normalCounter}</p>
      <button onClick={increaseNormal}>Increase NORMAL</button>
    </div>
  );
}
