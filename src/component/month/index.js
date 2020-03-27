import React, { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../store/dateContext";
import Week from "./week";

export default () => {
  const { item } = useContext(DateContext);
  return (
    <Container>
      {item.map((element, index) => {
        return <Week key={index} week={element} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 420px;
  margin: auto;
  background: #4a4a4a;
`;
