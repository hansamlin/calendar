import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { DateContext } from "../../store/dateContext";

export default ({ item }) => {
  const { state } = useContext(DateContext);

  let detail = null;
  if (state.sum === 0 && parseInt(moment().format("D")) === item.num) {
    detail = (
      <>
        <Arrow></Arrow>
        <Details>123</Details>
      </>
    );
  }

  return (
    <Container>
      <Name>{item.day}</Name>
      <Number opacity={item.active ? 1 : 0.3}>{item.num}</Number>
      <Event>
        <DayEvent />
      </Event>
      {detail}
    </Container>
  );
};

const Container = styled.button`
  flex-basis: calc(100% / 7);
  text-align: center;
  border: 0;
  display: inline-block;
  background: transparent;
  width: 60px;
  padding: 10px;
  vertical-align: top;
  cursor: pointer;
  z-index: 100;
  position: relative;
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
  color: rgba(255, 255, 255, ${props => props.opacity});
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

const Arrow = styled.div`
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 5px 5px 5px;
  border-color: transparent transparent rgba(164, 164, 164, 1) transparent;
  position: absolute;
`;

const Details = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% - 16px - 5px);
  width: 420px;
  height: 75px;
  background: rgba(164, 164, 164, 1);
  margin-top: 16px;
  border-radius: 4px;
  color: #ffffff;
`;
