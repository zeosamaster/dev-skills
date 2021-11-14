import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [devCount, setDevCount] = useState(null);

  return (
    <main>
      <h1>Create React App</h1>
      <h2>
        Deployed with{" "}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <br />
    </main>
  );
}

export default App;
