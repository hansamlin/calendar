import React, { useContext } from "react";
import styled from "styled-components";
import { SumContext } from "../../store/sumContext";
import moment from "moment";

export default () => {
  const { sum } = useContext(SumContext);
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
