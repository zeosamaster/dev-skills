import React from "react";
import { Button } from "@chakra-ui/react";

export function AddDev({ onClick }) {
  return (
    <Button colorScheme="teal" variant="link" onClick={onClick}>
      Add new Dev
    </Button>
  );
}
