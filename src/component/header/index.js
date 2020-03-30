import React, { useContext } from "react";
import styled from "styled-components";
import Main from "./main";
import Arrow from "./arrow";
import { SumContext } from "../../store/sumContext";

export default () => {
  const { setSum } = useContext(SumContext);

  const handlePrev = () => setSum(prev => prev - 1);
  const handleNext = () => setSum(prev => prev + 1);

  return (
    <Container>
      <Arrow reverse handleSum={handlePrev} />
      <Main />
      <Arrow handleSum={handleNext} />
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
