import React, { useState } from 'react';
import styled from 'styled-components';
import Limage from '../assets/login2.jpg'; // Ensure the path to your image is correct

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <Container>
      <FormContainer>
        <FormSide>
          {!isSignUp ? (
            <LoginForm>
              <Title>Sign In</Title>
              <InputField type="email" placeholder="Email" />
              <InputField type="password" placeholder="Password" />
              <SignInButton>Sign In</SignInButton>
              <SwitchText>
                Don't have an account? <SwitchButton onClick={toggleForm}>Sign Up</SwitchButton>
              </SwitchText>
            </LoginForm>
          ) : (
            <SignupForm>
              <Title>Sign Up</Title>
              <InputField type="text" placeholder="Name" />
              <InputField type="email" placeholder="Email" />
              <InputField type="password" placeholder="Password" />
              <SignUpButton>Sign Up</SignUpButton>
              <SwitchText>
                Already have an account? <SwitchButton onClick={toggleForm}>Sign In</SwitchButton>
              </SwitchText>
            </SignupForm>
          )}
        </FormSide>
      </FormContainer>
    </Container>
  );
};

export default LoginSignup;

// Styled Components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Limage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9); /* Adding some transparency to make it stand out against the background */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const FormSide = styled.div`
  width: 100%;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputField = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const SignInButton = styled.button`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #1abc9c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #16a085;
  }
`;

const SignUpButton = styled.button`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #1abc9c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #16a085;
  }
`;

const SwitchText = styled.p`
  text-align: center;
  font-size: 14px;
`;

const SwitchButton = styled.button`
  background: none;
  border: none;
  color: #1abc9c;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;

  &:hover {
    color: #16a085;
  }
`;
