import React from "react";
import { Text, Link, Container, Stack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export function Footer() {
  return (
    <Container
      as={Stack}
      maxW={"6xl"}
      py={4}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <Text>Created with Create React App + Supabase + Chakra</Text>
      <Text>
        Deployed with{" "}
        <Link color="teal.500" href="https://vercel.com/docs" isExternal>
          Vercel <ExternalLinkIcon mx="2px" />
        </Link>
        !
      </Text>
    </Container>
  );
}
