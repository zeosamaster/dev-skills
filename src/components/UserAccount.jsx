import React from 'react';
import { Button } from "@chakra-ui/button";
import { Badge, HStack } from "@chakra-ui/layout";

import { Web3Context } from '../context/web3-context';

function ConnectButton({ onClick }) {
  return (
    <Button color="blue.500" onClick={onClick}>
      Connect to wallet
    </Button>
  )
}

function Account({ account, devId }) {
  const truncatedAccount = account.slice(0, 10);

  return (
    <HStack spacing={6}>
      <Badge fontSize="1em" px={3} py={1}>{devId ? `DEV #${devId}` : `No DEVS tokens`}</Badge>
      <Badge fontSize="1em" px={3} py={1}>{truncatedAccount}...</Badge>
    </HStack>
  )
}

export function UserAccount() {
  const { loading, account, devId, connect } = React.useContext(Web3Context);

  if (loading) {
    return null;
  }

  if (!account) {
    return <ConnectButton onClick={connect} />;
  }

  return <Account account={account} devId={devId} />
}