import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { ChakraProvider, SimpleGrid, Heading } from "@chakra-ui/react";

import "./App.css";
import { getDevs } from "./services/db";
import { Form } from "./components/Form";
import { DevTable } from "./components/DevTable";
import { Footer } from "./components/Footer";
import { AddDev } from "./components/AddDev";

function App() {
  const [devs, setDevs] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const fetchDevs = async () => {
    const devs = await getDevs();
    setDevs(devs);
  };

  useEffect(() => {
    fetchDevs();
  }, []);

  const onAddDevClick = useCallback(() => {
    setIsAdding(true);
  });

  const onDevDismiss = useCallback(() => {
    setIsAdding(false);
  });

  const onDevSubmit = useCallback(() => {
    fetchDevs();
    onDevDismiss();
  });

  return (
    <ChakraProvider>
      <main>
        <SimpleGrid columns={1} spacing={10}>
          <Heading>Dev DAO - Dev Skills</Heading>
          {isAdding ? (
            <Form onSubmit={onDevSubmit} onDismiss={onDevDismiss} />
          ) : (
            <AddDev onClick={onAddDevClick} />
          )}
          <DevTable devs={devs} />
          <Footer />
        </SimpleGrid>
      </main>
    </ChakraProvider>
  );
}

export default App;
