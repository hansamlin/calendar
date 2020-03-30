import React, { createContext, useState } from "react";

export const DetailContext = createContext();

export default ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <DetailContext.Provider
      value={{
        show,
        setShow
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};
