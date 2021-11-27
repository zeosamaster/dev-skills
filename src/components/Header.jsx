import { Flex, Heading } from "@chakra-ui/layout";
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
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Dev DAO - Dev Skills
        </Heading>
      </Flex>

      <UserAccount />
    </Flex>
  );
}
