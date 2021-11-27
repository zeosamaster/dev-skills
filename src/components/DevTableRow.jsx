import React from "react";
import { useForm } from "react-hook-form";
import { IconButton } from "@chakra-ui/button";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { HStack, Text } from "@chakra-ui/layout";
import { Td, Tr } from "@chakra-ui/react";

import { DevsContext } from "../context/devs-context";

function AnyDev({ dev, children, ...props }) {
  return (
    <Tr key={dev.devId} {...props}>
      <Td isNumeric>{dev.devId}</Td>
      <Td>{children}</Td>
    </Tr>
  );
}

function NewDev({ devId }) {
  const { register, handleSubmit } = useForm();
  const { addDev, fetchDevs } = React.useContext(DevsContext);

  const onAdd = React.useCallback(
    async ({ skills }) => {
      const skillsArray = skills.replace(/, | ,/g, ",").split(",");
      await addDev({ devId, skills: skillsArray });
      fetchDevs();
    },
    [devId]
  );

  return (
    <AnyDev dev={{ devId }} bgColor="teal.50">
      <form onSubmit={handleSubmit(onAdd)}>
        <HStack>
          <Input
            placeholder="comma-separated skills"
            bgColor="white"
            {...register("skills")}
          />

          <IconButton bgColor="teal.300" type="submit">
            <CheckIcon color="white" />
          </IconButton>
        </HStack>
      </form>
    </AnyDev>
  );
}

function CurrentExistingDev({ dev }) {
  const { removeDev, fetchDevs } = React.useContext(DevsContext);
  const onDelete = React.useCallback(async () => {
    await removeDev({ devId: dev.devId });
    await fetchDevs();
  }, [dev]);

  return (
    <AnyDev dev={dev} bgColor="teal.50">
      <HStack justifyContent="center">
        <Text flex="1 1 auto">{dev.skills.join(", ")}</Text>
        <IconButton bgColor="red.300" flex="0" onClick={onDelete}>
          <DeleteIcon color="white" />
        </IconButton>
      </HStack>
    </AnyDev>
  );
}

export function Dev({ dev, ...props }) {
  return (
    <AnyDev dev={dev} {...props}>
      {dev.skills.join(", ")}
    </AnyDev>
  );
}

export function CurrentDev({ dev, devId }) {
  if (!devId) {
    return null;
  }

  if (dev) {
    return <CurrentExistingDev dev={dev} />;
  }

  return <NewDev devId={devId} />;
}
