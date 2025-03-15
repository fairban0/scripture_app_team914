import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <p>Click below to visit the Scriptures Page:</p>
      <Link to="/scripture">
        <button className="btn">Go to Scriptures</button>
      </Link>
    </div>
  );
}

export default App;
