import React from "react";
import styled from "styled-components";

const Unknown = () => {
  return (
    <UnknownDiv>
      <div className="unknown">
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
    </UnknownDiv>
  );
};

const UnknownDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  font-size: 2rem;
`;

export default Unknown;
