import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';

import { signup } from '../services/auth';

export function Signup() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const goBack = React.useCallback(() => navigate(-1));

  return (
    <form>

      <FormControl id="email" mt="20px" isInvalid={errors.email}>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          {...register("email", {
            required: 'Required field',
          })}
          errorBorderColor="red.300" />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl id="password" mt="20px" isInvalid={errors.password}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          {...register("password", {
            required: 'Required field',
            minLength: {
              value: 6,
              message: 'Password must have 6 minimum characters'
            }
          })}
          errorBorderColor="red.300" />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl id="password" mt="20px" isInvalid={errors.confirmPassword} >
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          {...register("confirmPassword", {
            required: 'Required field',
            minLength: {
              value: 6,
              message: 'Password must have 6 minimum characters'
            },
            validate: (value) => value === watch('password') || 'Passwords must match'
          })}
          errorBorderColor="red.300" />
        <FormErrorMessage>
          {errors.confirmPassword && errors.confirmPassword.message}
        </FormErrorMessage>
      </FormControl>

      <ButtonGroup mt="20px" spacing="6">
        <Button colorScheme="teal" type="submit" onClick={handleSubmit(signup)}>
          Submit
        </Button>
        <Button colorScheme="teal" onClick={goBack} variant="outline">
          Cancel
        </Button>
      </ButtonGroup>

    </form>
  )
}