import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export function Link({ href, isInternal, withIcon, children }) {
  return (
    <ChakraLink color="teal.500" href={href} isExternal={!isInternal}>
      {children} {withIcon && <ExternalLinkIcon mx="2px" />}
    </ChakraLink>
  );
}
