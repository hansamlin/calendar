import React, { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../store/dateContext";
import Detail from "./detail";
import { eventColor } from "./eventColor";

const calendar = [
  { calendar: "work", eventName: "Lunch Meeting w/ Mark", date: "2020-03-15" },
  {
    calendar: "work",
    eventName: "Interview - Jr. Web Developer",
    date: "2020-03-16"
  },
  { calendar: "work", eventName: "Dinner w/ Marketing", date: "2020-03-21" },

  { calendar: "sports", eventName: "Game vs Houston", date: "2020-03-18" },
  { calendar: "sports", eventName: "Game vs Denver", date: "2020-03-21" },

  { calendar: "kids", eventName: "Ice Cream Night", date: "2020-03-31" },

  { calendar: "other", eventName: "Teach Kids to Code", date: "2020-03-24" }
];

export default ({ item, index }) => {
  const { date, setDate } = useContext(DateContext);

  const handleClick = e => {
    e.preventDefault();
    setDate(item.date);
  };

  const event = calendar.filter(element => element.date === item.date);

  let dayEvent = null;
  if (event) {
    dayEvent = event.map((element, index) => {
      return <DayEvent work={eventColor.get(element.calendar)} key={index} />;
    });
  }

  let detail = null;
  if (date === item.date) {
    detail = <Detail index={index} event={event} />;
  }

  return (
    <Container onClick={handleClick}>
      <Name>{item.day}</Name>
      <Number active={item.active ? 1 : 0.3}>{sprintf(item.num)}</Number>
      <Event>{dayEvent}</Event>
      {detail}
    </Container>
  );
};

const sprintf = num => {
  return num < 10 ? `0${num}` : num;
};

const Container = styled.div`
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
  background: ${props => props.work};
`;
