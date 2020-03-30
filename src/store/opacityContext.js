import React, { createContext, useState } from "react";

export const OpacityContext = createContext();

export default ({ children }) => {
  const [opacity, setOpacity] = useState(1);

  return (
    <OpacityContext.Provider
      value={{
        opacity,
        setOpacity
      }}
    >
      {children}
    </OpacityContext.Provider>
  );
};
