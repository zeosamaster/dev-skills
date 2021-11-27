import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { UserAccount } from "./UserAccount";

export function Header() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Box mr={6}>
          <Avatar src="https://avatars.githubusercontent.com/u/90118409?s=200&v=4" />
        </Box>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Developer DAO - Dev Skills
        </Heading>
      </Flex>

      <UserAccount />
    </Flex>
  );
}
