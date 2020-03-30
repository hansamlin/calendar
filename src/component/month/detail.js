import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { DateContext } from "../../store/dateContext";
import { eventColor } from "./eventColor";

export default ({ index, event }) => {
  console.log(event);

  let detail = null;
  if (event.length > 0) {
    detail = event.map((element, index) => {
      console.log(element);
      return (
        <EventLink
          href=""
          theme={{ background: eventColor.get(element.calendar) }}
          onClick={e => e.preventDefault()}
          key={index}
        >
          <EventName>{element.eventName}</EventName>
        </EventLink>
      );
    });
  } else {
    detail = <EventName>No Events</EventName>;
  }

  return (
    <Details theme={{ index }}>
      <FadeIn>{detail}</FadeIn>
    </Details>
  );
};

const toggle = keyframes`
from {
  height: 0px;
}

to {
  height: 75px;
}
`;

const Details = styled.div`
  position: absolute;
  left: calc(-60px * ${props => props.theme.index});
  top: calc(100% - 16px - 5px);
  width: 420px;
  background: rgba(164, 164, 164, 1);
  margin-top: 16px;
  border-radius: 4px;
  color: #ffffff;
  padding: 7px 0;
  animation: ${toggle} forwards 0.5s ease;
  text-align: justify;

  &:before {
    content: "";
    top: -5px;
    left: calc((60px * ${props => props.theme.index}) + 30px);
    transform: translateX(-50%);
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent rgba(164, 164, 164, 1) transparent;
    position: absolute;
  }
`;

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

const FadeIn = styled.div`
  animation: ${fadeIn} 0.3s ease 0.5s both;
`;

const EventLink = styled.a`
  line-height: 22px;
  letter-spacing: 0.5px;
  color: #fff;
  padding: 2px 16px;
  display: block;

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    margin: 6px 0 0;
    display: inline-block;
    background: ${props => props.theme.background};
  }
`;

const EventName = styled.span`
  display: inline-block;
  padding: 0 0 0 7px;
  font-size: 16px;
`;
