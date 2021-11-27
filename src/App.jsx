import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { Devs } from "./pages/Devs";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Web3ContextProvider } from "./context/web3-context";
import { DevsContextProvider } from "./context/devs-context";

function App() {
  return (
    <ChakraProvider>
      <Web3ContextProvider>
        <DevsContextProvider>
          <Header />
          <main>
            <Flex flexFlow="column" h="full">
              <Box flex="2 0 auto">
                <Devs />
              </Box>
              <Box flex="0">
                <Footer />
              </Box>
            </Flex>
          </main>
        </DevsContextProvider>
      </Web3ContextProvider>
    </ChakraProvider>
  );
}

export default App;
