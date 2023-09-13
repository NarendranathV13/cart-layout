import React from "react";
import { Contain, LoginButton, InputField, Heading, LoginContainer, WelcomeText } from "../../StyledComponent/LoginStyle"; // Update the import path

const Login = () => {
  return (
    <Contain>
      <LoginContainer>
        <Heading>Welcome</Heading>
        <WelcomeText>Login</WelcomeText>
        <div className="login-form"> {/* If you want to add custom classes, do it here */}
          <InputField type="email" placeholder="user email" />
          <InputField type="password" placeholder="Password" />
          <LoginButton type="button">Login</LoginButton>
          <p className="text-center">New user?</p>
          <LoginButton type="button">Register</LoginButton>
        </div>
      </LoginContainer>
    </Contain>
  );
};

export default Login;
