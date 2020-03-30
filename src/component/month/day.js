import React, { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../store/dateContext";
import Detail from "./detail";

export default ({ item, index }) => {
  const { date, setDate } = useContext(DateContext);

  const handleClick = e => {
    e.preventDefault();
    setDate(item.date);
  };

  let detail = null;
  if (date === item.date) {
    detail = <Detail index={index} />;
  }

  return (
    <Container href="" onClick={handleClick}>
      <Name>{item.day}</Name>
      <Number active={item.active ? 1 : 0.3}>{sprintf(item.num)}</Number>
      <Event>
        <DayEvent />
      </Event>
      {detail}
    </Container>
  );
};

const sprintf = num => {
  return num < 10 ? `0${num}` : num;
};

const Container = styled.a`
  flex-basis: calc(100% / 7);
  text-align: center;
  border: 0;
  display: inline-block;
  background: transparent;
  width: 60px;
  padding: 5px;
  vertical-align: top;
  cursor: pointer;
  z-index: 100;
  position: relative;
  text-decoration: none;
`;

const Name = styled.div`
  font-size: 9px;
  text-transform: uppercase;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.7px;
`;

const Number = styled.div`
  font-size: 24px;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, ${props => props.active});
`;

const Event = styled.div`
  list-style: none;
  margin-top: 3px;
  text-align: center;
  height: 12px;
  line-height: 6px;
  overflow: hidden;
`;

const DayEvent = styled.span`
  vertical-align: top;
  display: inline-block;
  padding: 0;
  width: 5px;
  height: 5px;
  line-height: 5px;
  margin: 0 1px;
  background: rgba(153, 198, 109, 1);
`;
