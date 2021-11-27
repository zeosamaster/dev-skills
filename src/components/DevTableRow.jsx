import { Input } from "@chakra-ui/input";
import { Td, Tr } from "@chakra-ui/react";
import React from "react";

function AnyDev({ dev, children, ...props }) {
  return (
    <Tr key={dev.devId} {...props}>
      <Td isNumeric>{dev.devId}</Td>
      <Td>{children}</Td>
    </Tr>
  );
}

export function Dev({ dev, ...props }) {
  return (
    <AnyDev dev={dev} {...props}>
      {dev.skills.join(", ")}
    </AnyDev>
  );
}

export function CurrentDev({ dev, devId }) {
  if (!devId) {
    return null;
  }

  if (dev) {
    return <Dev dev={dev} bgColor="teal.50" />;
  }

  return (
    <AnyDev dev={{ devId }} bgColor="teal.50">
      <Input placeholder="comma-separated skills" bgColor="white" />
    </AnyDev>
  );
}
