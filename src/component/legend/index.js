import React from "react";
import styled from "styled-components";

const option = [
  { color: "rgba(247, 167, 0, 1)", name: "Work" },
  { color: "rgba(156, 202, 235, 1)", name: "Sports" },
  { color: "rgba(249, 233, 0, 1)", name: "Kids" },
  { color: "rgba(153, 198, 109, 1)", name: "Other" }
];

export default () => {
  return (
    <Container>
      {option.map((item, index) => {
        return (
          <Option key={index} color={item.color}>
            {item.name}
          </Option>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  background: rgba(60, 60, 60, 1);
  line-height: 30px;
`;

const Option = styled.span`
  position: relative;
  padding: 0 0 0 25px;
  font-size: 13px;
  display: inline-block;
  line-height: 30px;
  background: transparent;
  color: rgba(255, 255, 255, 1);

  &:after {
    position: absolute;
    content: "";
    height: 5px;
    width: 5px;
    top: 12px;
    left: 14px;
    background: ${props => props.color};
  }
`;
