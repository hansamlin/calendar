import React, { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../store/dateContext";
import moment from "moment";

export default () => {
  const { sum } = useContext(DateContext);
  const datetime = moment().add(sum, "month");
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
