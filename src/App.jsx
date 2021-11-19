import React from "react";
import { ChakraProvider, SimpleGrid, Heading } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Devs />} />
              <Route path="/add" element={<AddDev />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </SimpleGrid>
      </main>
    </ChakraProvider>
  );
}

export default App;
