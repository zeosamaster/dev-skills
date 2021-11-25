import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { useNavigate } from 'react-router';
import { Center, Text } from '@chakra-ui/layout';


export function LoginMagicLink() {
  const navigate = useNavigate();

  const goHome = React.useCallback(() => navigate('/'));

  return (
    <>
      <Text>Check your inbox to login using the magic link</Text>

      <Center>
        <Button colorScheme="teal" type="submit" onClick={goHome}>
          Go Home
        </Button>
      </Center>
    </>
  )
}