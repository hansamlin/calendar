import React, { createContext, useState } from "react";

export const SumContext = createContext();

export default ({ children }) => {
  const [sum, setSum] = useState(0);

  return (
    <SumContext.Provider
      value={{
        sum,
        setSum
      }}
    >
      {children}
    </SumContext.Provider>
  );
};
