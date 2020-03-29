import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { DateContext } from "../../store/dateContext";

export default ({ reverse }) => {
  const { setSum } = useContext(DateContext);

  const handleClick = () => {
    if (reverse) {
      setSum(prev => prev - 1);
    } else {
      setSum(prev => prev + 1);
    }
  };

  return useMemo(
    () => <Arrow reverse={reverse} onClick={handleClick} />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

const Arrow = styled.button`
  flex-basis: 10%;
  background: transparent;
  border: 0;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    border-width: 7.5px 0 7.5px 10px;
    border-style: solid;
    border-color: transparent transparent transparent rgba(160, 159, 160, 1);
    transform: translate(-50%, -50%) ${props => props.reverse && "scale(-1)"};
  }
`;
