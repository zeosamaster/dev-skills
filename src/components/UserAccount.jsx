import React from 'react';
import { Button } from "@chakra-ui/button";
import { Badge, HStack } from "@chakra-ui/layout";

import { useWeb3 } from '../hooks/useWeb3';

function ConnectButton({ onClick }) {
  return (
    <Button color="blue.500" onClick={onClick}>
      Connect to wallet
    </Button>
  )
}

function Account({ account, token }) {
  const truncatedAccount = account.slice(0, 10);

  return (
    <HStack spacing={6}>
      <Badge fontSize="1em" px={3} py={1}>{token ? `DEV #${token}` : `No DEV tokens`}</Badge>
      <Badge fontSize="1em" px={3} py={1}>{truncatedAccount}...</Badge>
    </HStack>
  )
}

export function UserAccount() {
  const { loading, account, token, connect } = useWeb3();

  if (loading) {
    return null;
  }

  if (!account) {
    return <ConnectButton onClick={connect} />;
  }

  return <Account account={account} token={token} />
}