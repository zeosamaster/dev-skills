import React from "react";
import { useEffect, useState } from "react";
import { ChakraProvider, SimpleGrid, Heading } from "@chakra-ui/react";

import "./App.css";
import { getDevs } from "./services/db";
import { Form } from "./components/Form";
import { DevTable } from "./components/DevTable";
import { Footer } from "./components/Footer";

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
        <SimpleGrid columns={1} spacing={10}>
          <Heading>Dev DAO - Dev Skills</Heading>
          <Form onSubmit={fetchDevs} />
          <DevTable devs={devs} />
          <Footer />
        </SimpleGrid>
      </main>
    </ChakraProvider>
  );
}

export default App;
