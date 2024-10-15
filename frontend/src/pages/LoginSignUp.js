import React, { useState } from 'react';
import styled from 'styled-components';

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <Container>
      <FormContainer>
        <FormSide isSignUp={isSignUp}>
          {!isSignUp ? (
            <LoginForm>
              <Title>Welcome Back!</Title>
              <Subtitle>
                To keep connected with us, please login with your personal info
              </Subtitle>
              <SignInButton onClick={toggleForm}>Sign In</SignInButton>
            </LoginForm>
          ) : (
            <SignupForm>
              <Title>Create Account</Title>
              <SocialIcons>
                <SocialIcon href="#"><i className="fab fa-facebook-f" /></SocialIcon>
                <SocialIcon href="#"><i className="fab fa-google-plus-g" /></SocialIcon>
                <SocialIcon href="#"><i className="fab fa-linkedin-in" /></SocialIcon>
              </SocialIcons>
              <OrText>or use your email for registration:</OrText>
              <InputField type="text" placeholder="Name" />
              <InputField type="email" placeholder="Email" />
              <InputField type="password" placeholder="Password" />
              <SignUpButton>Sign Up</SignUpButton>
            </SignupForm>
          )}
        </FormSide>

        <OverlaySide isSignUp={isSignUp}>
          <Overlay>
            <OverlayContent>
              {isSignUp ? (
                <>
                  <Title>Welcome Back!</Title>
                  <Subtitle>To keep connected with us, please login with your personal info</Subtitle>
                  <SignInButton onClick={toggleForm}>Sign In</SignInButton>
                </>
              ) : (
                <>
                  <Title>Create Account</Title>
                  <Subtitle>
                    Enter your personal details and start your journey with us
                  </Subtitle>
                  <SignUpButton onClick={toggleForm}>Sign Up</SignUpButton>
                </>
              )}
            </OverlayContent>
          </Overlay>
        </OverlaySide>
      </FormContainer>
    </Container>
  );
};

export default LoginSignup;

// Styled Components for the Login/Signup pages
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
`;

const FormContainer = styled.div`
  width: 900px;
  height: 550px;
  background-color: #fff;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;
  border-radius: 10px;
`;

const FormSide = styled.div`
  width: 50%;
  padding: 50px;
  background-color: ${({ isSignUp }) => (isSignUp ? '#fff' : '#1abc9c')};
  color: ${({ isSignUp }) => (isSignUp ? '#000' : '#fff')};
  transition: all 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OverlaySide = styled.div`
  width: 50%;
  background-color: ${({ isSignUp }) => (isSignUp ? '#1abc9c' : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease-in-out;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const OverlayContent = styled.div`
  color: #fff;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  margin-bottom: 40px;
`;

const SignInButton = styled.button`
  padding: 12px 40px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #fff;
    color: #1abc9c;
  }
`;

const SignUpButton = styled.button`
  padding: 12px 40px;
  background-color: transparent;
  border: 1px solid #1abc9c;
  color: #1abc9c;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #1abc9c;
    color: #fff;
  }
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
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialIcon = styled.a`
  margin: 0 10px;
  font-size: 20px;
  color: #1abc9c;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0d865d;
  }
`;

const OrText = styled.p`
  font-size: 12px;
  color: #999;
  text-align: center;
  margin-bottom: 20px;
`;
