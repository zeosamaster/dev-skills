import React from "react";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { getDevCount } from "./services/db";
import { Form } from "./components/Form";

function App() {
  const [devCount, setDevCount] = useState(null);

  async function getCount() {
    const count = await getDevCount();
    setDevCount(count);
  }

  useEffect(() => {
    getCount();
  }, []);

  return (
    <ChakraProvider>
      <main>
        <h1>Create React App + Supabase + Chakra</h1>
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
        <Form onSubmit={getCount} />
      </main>
    </ChakraProvider>
  );
}

export default App;
