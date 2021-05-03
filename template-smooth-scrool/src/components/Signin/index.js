import React from 'react';
import {
  Text,
  FormButton,
  FormInput,
  FormLabel,
  Form,
  FormContent,
  Icon,
  FormWrap,
  Container,
  FormTitle,
} from './SigninStyle';

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Zokko</Icon>
          <FormContent>
            <Form action='#'>
              <FormTitle>Sing in to your account</FormTitle>
              <FormLabel htmlForm='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlForm='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot your password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
