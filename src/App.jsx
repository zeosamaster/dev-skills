import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Devs } from "./pages/Devs";
import { AddDev } from "./pages/AddDev";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { LoginMagicLink } from "./pages/LoginMagicLink";
import { Signup } from "./pages/Signup";
import { Web3ContextProvider } from "./context/web3-context";
import { DevsContextProvider } from "./context/devs-context";

function App() {
  return (
    <ChakraProvider>
      <Web3ContextProvider>
        <DevsContextProvider>
          <BrowserRouter>
            <Header />
            <main>
              <Flex flexFlow="column" h="full">
                <Box flex="2 0 auto">
                  <Routes>
                    <Route path="/" element={<Devs />} />
                    <Route path="/add" element={<AddDev />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                      path="/login-magic-link"
                      element={<LoginMagicLink />}
                    />
                    <Route path="/signup" element={<Signup />} />
                  </Routes>
                </Box>
                <Box flex="0">
                  <Footer />
                </Box>
              </Flex>
            </main>
          </BrowserRouter>
        </DevsContextProvider>
      </Web3ContextProvider>
    </ChakraProvider>
  );
}

export default App;
