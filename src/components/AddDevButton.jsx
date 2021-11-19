import React from "react";
import { Button } from "@chakra-ui/react";

export function AddDevButton({ onClick }) {
  return (
    <Button colorScheme="teal" variant="link" onClick={onClick}>
      Add new Dev
    </Button>
  );
}
