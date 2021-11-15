import React from "react";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { getDevs } from "./services/db";
import { Form } from "./components/Form";
import { DevTable } from "./components/DevTable";

function App() {
  const [devs, setDevs] = useState(null);

  const fetchDevs = async () => {
    const devs = await getDevs();
    setDevs(devs);
  };

  useEffect(() => {
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
        <Form onSubmit={fetchDevs} />
        <DevTable devs={devs} />
      </main>
    </ChakraProvider>
  );
}

export default App;
