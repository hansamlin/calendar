import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DateContext } from "../../store/dateContext";
import Week from "./week";
import moment from "moment";
import chunk from "lodash/chunk";

export default () => {
  const { sum, date } = useContext(DateContext);
  const datetime = moment().add(sum, "month");
  const daysInMonth = datetime.daysInMonth();

  let dayArr = [];
  for (let i = 1; i <= daysInMonth; i++) {
    dayArr.push({
      num: i,
      day: moment(datetime)
        .set("date", i)
        .format("dd"),
      date: moment(datetime)
        .set("date", i)
        .format("Y-MM-DD"),
      active: true
    });
  }

  const firstDay = parseInt(
    moment(datetime)
      .set("date", 1)
      .format("d")
  );

  if (firstDay !== 0) {
    const prevDaysInMonth = moment(datetime)
      .subtract(1, "month")
      .daysInMonth();
    const end = prevDaysInMonth - firstDay;

    for (let i = prevDaysInMonth; i > end; i--) {
      const prev = moment()
        .subtract(1, "month")
        .set("date", i);

      dayArr = [
        {
          num: i,
          day: prev.format("dd"),
          date: prev.format("Y-MM-DD"),
          active: false
        }
      ].concat(dayArr);
    }
  }

  const lastDay = parseInt(
    moment(datetime)
      .set("date", moment(datetime).daysInMonth())
      .format("d")
  );

  if (lastDay !== 6) {
    for (let i = 1; i <= 6 - lastDay; i++) {
      const next = moment(datetime)
        .add(1, "month")
        .set("date", i);

      dayArr.push({
        num: i,
        day: next.format("dd"),
        date: next.format("Y-MM-DD"),
        active: false
      });
    }
  }

  const item = chunk(dayArr, 7);

  return (
    <Container>
      {item.map((element, index) => {
        const isFind = element.find(obj => {
          return obj.date === date;
        });

        return (
          <ThemeProvider key={index} theme={{ margin: isFind && "0 0 75px" }}>
            <Week week={element} />
          </ThemeProvider>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 420px;
  margin: auto;
  background: #4a4a4a;
`;
