import React from "react";
import DateProvider from "./dateContext";
import DetailProvider from "./detailContext";
import OpacityProvider from "./opacityContext";
import SumProvider from "./sumContext";

export default ({ children }) => {
  return (
    <SumProvider>
      <DateProvider>
        <DetailProvider>
          <OpacityProvider>{children}</OpacityProvider>
        </DetailProvider>
      </DateProvider>
    </SumProvider>
  );
};
