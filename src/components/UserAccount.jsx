import React from 'react';
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";

import { useWeb3 } from '../hooks/useWeb3';

function ConnectButton({ onClick }) {
  return (
    <Button color="blue.500" onClick={onClick}>
      Connect to wallet
    </Button>
  )
}

export function UserAccount() {
  const { loading, account, connect } = useWeb3();

  if (loading) {
    return null;
  }

  if (!account) {
    return <ConnectButton onClick={connect} />;
  }

  const truncatedAccount = account.slice(0, 10);
  return <Text>{truncatedAccount}...</Text>;
}