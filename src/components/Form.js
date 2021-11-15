import React, { useState, useCallback } from "react";
import { Button, Input, Stack } from "@chakra-ui/react";

import { addDev } from "../services/db";

export function Form({ onSubmit }) {
  const [devId, setDevId] = useState("");
  const [skills, setSkills] = useState("");

  const onDevIdChange = useCallback(
    (e) => {
      const newDevId = e.target.value;
      setDevId(newDevId);
    },
    [setDevId]
  );

  const onSkillsChange = useCallback(
    (e) => {
      const newSkills = e.target.value;
      setSkills(newSkills);
    },
    [setSkills]
  );

  const submitDev = useCallback(async () => {
    const skillArray = skills.replace(/, | ,/g, ",").split(",");
    if (devId && skillArray.length > 0) {
      await addDev({ devId, skills: skillArray });
    }
    setDevId("");
    setSkills("");
    onSubmit();
  }, [devId, skills]);

  return (
    <Stack spacing={3}>
      <Input
        value={devId}
        onChange={onDevIdChange}
        variant={devId ? "filled" : undefined}
        size="lg"
        placeholder="Dev ID"
      />
      <Input
        value={skills}
        onChange={onSkillsChange}
        variant={skills ? "filled" : undefined}
        size="lg"
        placeholder="Skills (comma separated)"
      />
      <Button colorScheme="blue" size="lg" onClick={submitDev}>
        Submit
      </Button>
    </Stack>
  );
}
