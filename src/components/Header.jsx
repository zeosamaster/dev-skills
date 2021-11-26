import { Flex, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
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
          <Link to="/">Dev DAO - Dev Skills</Link>
        </Heading>
      </Flex>

      <UserAccount />
    </Flex>
  )
}