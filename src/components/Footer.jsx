import React from "react";
import { Text, Container, Stack } from "@chakra-ui/react";
import { Link } from "./Link";

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
      <Text>
        Created by <Link href="https://twitter.com/zeox7_eth">zeox7</Link> with{" "}
        <Link href="https://reactjs.org/">React</Link> +{" "}
        <Link href="https://supabase.io/">Supabase</Link> +{" "}
        <Link href="https://chakra-ui.com/">Chakra</Link>!
      </Text>
      <Text>
        Deployed with <Link href="https://vercel.com/docs">Vercel</Link>!
      </Text>
    </Container>
  );
}
