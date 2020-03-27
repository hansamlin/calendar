import React, { useContext } from "react";
import styled from "styled-components";
import Day from "./day";
import { DateContext } from "../../store/dateContext";

export default ({ week }) => {
  const { toggle } = useContext(DateContext);
  console.log(week.find(item => item.num === parseInt(toggle)));
  return (
    <Container>
      {week.map((element, index) => {
        return <Day item={element} key={index} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  transform: translateY(75px);
`;
