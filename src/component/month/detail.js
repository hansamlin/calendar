import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { DateContext } from "../../store/dateContext";

export default ({ index }) => {
  const { date } = useContext(DateContext);

  return (
    <Details theme={{ index }}>
      <FadeIn>{date}</FadeIn>
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
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${toggle} forwards 0.5s ease;

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
