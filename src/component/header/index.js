import React from "react";
import styled from "styled-components";
import Main from "./main";
import Arrow from "./arrow";

export default () => {
  return (
    <Container>
      <Arrow reverse />
      <Main />
      <Arrow />
    </Container>
  );
};

const Container = styled.header`
  padding: 0;
  font-size: 20px;
  line-height: 50px;
  font-weight: 100;
  letter-spacing: 1px;
  background: rgba(66, 66, 66, 1);
  display: flex;
`;
