import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { getDevCount } from "./services/db";

function App() {
  const [devCount, setDevCount] = useState(null);

  useEffect(() => {
    async function getCount() {
      const count = await getDevCount();
      setDevCount(count);
    }
    getCount();
  }, []);

  return (
    <main>
      <h1>Create React App + Supabase</h1>
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
      <h2>The current Dev count is:</h2>
      <p>{devCount !== null ? devCount : "Loading Devs..."}</p>
    </main>
  );
}

export default App;
