import React from "react";
import styled from "styled-components";

const Code = ({ isUserLoggedIn, isLoaded }) => {
  console.log(isUserLoggedIn, isLoaded);
  const { success, message, id } = isUserLoggedIn;
  if (!isLoaded) {
    return (
      <CodeWrapper>
        <div>Loading...</div>
      </CodeWrapper>
    );
  } else {
    return (
      <CodeWrapper>
        <div>{success ? "Logged In" : message}</div>
      </CodeWrapper>
    );
  }
};

const CodeWrapper = styled.div`
  height: 100vh;
  text-align: center;
`;

export default Code;
