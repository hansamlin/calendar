import React from "react";
import styled from "styled-components";
import Day from "./day";

export default ({ week }) => {
  return (
    <Container>
      {week.map((element, index) => {
        return <Day item={element} key={index} index={index} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  margin: ${props => {
    return props.theme.margin;
  }};
`;
