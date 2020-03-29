import React, { createContext, useState } from "react";
import moment from "moment";

export const DateContext = createContext();

export default ({ children }) => {
  const [sum, setSum] = useState(0);
  const [date, setDate] = useState(moment().format("Y-MM-DD"));

  return (
    <DateContext.Provider
    value={{
      sum,
      setSum,
      date,
      setDate
    }}
    >
      {children}
    </DateContext.Provider>
  );
};
