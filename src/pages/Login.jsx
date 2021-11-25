import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';

import { login, sendMagicLink } from '../services/auth';

export function Login() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate();

  const onMagicLink = React.useCallback(async ({ email }) => {
    const { error } = await sendMagicLink({ email });

    if (!error) {
      return navigate('/login-magic-link');
    }
  }, []);

  const onLogin = React.useCallback(async ({ email, password }) => {
    if (!password) {
      return setError("password", { message: "Required field" });
    }

    const { error } = await login({ email, password });

    if (!error) {
      return navigate('/');
    }
  }, []);

  return (
    <form>

      <FormControl id="email" mt="20px" isInvalid={errors.email}>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          {...register("email", {
            required: 'Required field'
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
          {...register("password")}
          errorBorderColor="red.300" />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl id="login" mt="20px">
        <Button colorScheme="teal" type="submit" onClick={handleSubmit(onLogin)}>
          Login
        </Button>
      </FormControl>

      <FormControl id="magic-link" mt="20px">
        <Button colorScheme="teal" variant="outline" onClick={handleSubmit(onMagicLink)}>
          Just send me an email
        </Button>
      </FormControl>
    </form>
  )
}