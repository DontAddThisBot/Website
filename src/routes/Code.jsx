import React, { useContext } from "react";
import { Context } from "../Context";
import styled from "styled-components";

const Code = () => {
  const { isLoggedIn: isUserLoggedIn, isLoading } = useContext(Context);
  const { success, message, id } = isUserLoggedIn;

  if (!isLoading) {
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
