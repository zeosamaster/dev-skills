import React from "react";
import { useForm } from "react-hook-form";
import { Stack, ButtonGroup, Button, Input } from "@chakra-ui/react";

import { addDev } from "../services/db";

export function Form({ onSubmit, onDismiss }) {
  const { register, handleSubmit } = useForm();

  const submitDev = async ({ devId, skills }) => {
    const skillArray = skills.replace(/, | ,/g, ",").split(",");

    if (devId && skillArray.length > 0) {
      await addDev({ devId, skills: skillArray });
    }

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit(submitDev)}>
      <Stack spacing={3}>
        <Input {...register("devId")} size="lg" placeholder="Dev ID" />
        <Input
          {...register("skills")}
          size="lg"
          placeholder="Skills (comma separated)"
        />
        <ButtonGroup spacing="6" alignItems="right">
          <Button colorScheme="blue" size="lg" type="submit">
            Submit
          </Button>
          <Button colorScheme="red" size="lg" onClick={onDismiss}>
            Cancel
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
}
