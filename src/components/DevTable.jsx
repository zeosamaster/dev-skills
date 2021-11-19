import React from "react";
import {
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

export function DevTable({ devs }) {
  if (!devs || !devs.length) {
    return <p>Loading devs...</p>;
  }

  return (
    <Table variant="simple">
      <TableCaption>List of devs and their skills</TableCaption>
      <Thead>
        <Tr>
          <Th isNumeric>Dev ID</Th>
          <Th>Skills</Th>
        </Tr>
      </Thead>
      <Tbody>
        {devs.map((dev) => (
          <Tr key={dev.devId}>
            <Td isNumeric>{dev.devId}</Td>
            <Td>{dev.skills.join(", ")}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
