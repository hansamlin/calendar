import React, { createContext, useReducer, useState } from "react";
import moment from "moment";
import chunk from "lodash/chunk";

export const DateContext = createContext();

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { sum: 0 });
  const [toggle, setToggle] = useState(moment().format("D"));
  let dayArr = [];

  const datetime = moment().add(state.sum, "month");
  const daysInMonth = datetime.daysInMonth();

  for (let i = 1; i <= daysInMonth; i++) {
    dayArr.push({
      num: i,
      day: moment()
        .set("date", i)
        .format("dd"),
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

    const prev = [];
    for (let i = prevDaysInMonth; i > end; i--) {
      prev.push({
        num: i,
        day: moment()
          .subtract(1, "month")
          .set("date", i)
          .format("dd"),
        active: false
      });
    }
    prev.reverse();

    dayArr = [...prev, ...dayArr];
  }

  let i = 1;
  while (dayArr.length !== 35) {
    dayArr.push({
      num: i,
      day: moment(datetime)
        .add(1, "month")
        .set("date", i)
        .format("dd"),
      active: false
    });
    i++;
  }

  const item = chunk(dayArr, 7);

  return (
    <DateContext.Provider
      value={{ datetime, item, state, dispatch, toggle, setToggle }}
    >
      {children}
    </DateContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { sum: state.sum + 1 };
    case "decrement":
      return { sum: state.sum - 1 };

    default:
      throw new Error();
  }
};
