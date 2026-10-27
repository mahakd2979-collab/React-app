
import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Click the button!");

  function handleClick() {
    setMessage("Button clicked successfully!");
  }

  return (
    <div>
      <h1>React Event Handling</h1>
      <p>{message}</p>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
