import { useState } from "react";
import "./App.css";
import MyComponent from "./components/InputDesign";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
