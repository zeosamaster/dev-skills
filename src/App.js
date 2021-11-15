import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { getDevCount, getDevs } from "./services/db";
import { Form } from "./components/Form";
import { DevTable } from "./components/DevTable";

function App() {
  const [devCount, setDevCount] = useState(null);
  const [devs, setDevs] = useState(null);

  async function getCount() {
    const count = await getDevCount();
    setDevCount(count);
  }

  const fetchDevs = async () => {
    const devs = await getDevs();
    setDevs(devs);
  };

  useEffect(() => {
    getCount();
  }, []);

  useEffect(() => {
    fetchDevs();
  }, []);

  const onUpdate = useCallback(() => {
    getCount();
    fetchDevs();
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
        <Form onSubmit={onUpdate} />
        <DevTable devs={devs} />
      </main>
    </ChakraProvider>
  );
}

export default App;
