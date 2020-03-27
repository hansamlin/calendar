import React, { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../store/dateContext";

export default () => {
  const { datetime } = useContext(DateContext);
  const month = datetime.format("MMMM");
  const year = datetime.format("YYYY");

  return (
    <Main>
      {month} {year}
    </Main>
  );
};

const Main = styled.div`
  flex-basis: 80%;
  text-align: center;
  color: #fff;
`;
