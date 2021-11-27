import React from "react";
import { Table, TableCaption, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

import { DevsContext } from "../context/devs-context";
import { Web3Context } from "../context/web3-context";
import { CurrentDev, Dev } from "./DevTableRow";

export function DevTable() {
  const { devs } = React.useContext(DevsContext);
  const { devId } = React.useContext(Web3Context);

  if (!devs || !devs.length) {
    return <p>Loading devs...</p>;
  }

  let currentDev = null;
  const otherDevs = devs.filter((d) => {
    if (Number(d.devId) === Number(devId)) {
      currentDev = d;
      return false;
    }
    return true;
  });

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
        <CurrentDev dev={currentDev} devId={devId} />
        {otherDevs.map((dev) => (
          <Dev dev={dev} />
        ))}
      </Tbody>
    </Table>
  );
}
