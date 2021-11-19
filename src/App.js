import React from "react";
import { ChakraProvider, SimpleGrid, Heading } from "@chakra-ui/react";

import "./App.css";
import { Devs } from "./pages/Devs";
import { AddDev } from "./pages/AddDev";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <main>
        <SimpleGrid columns={1} spacing={10}>
          <Heading>Dev DAO - Dev Skills</Heading>
          <AddDev />
          <Devs />
          <Footer />
        </SimpleGrid>
      </main>
    </ChakraProvider>
  );
}

export default App;
