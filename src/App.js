import React from "react";
import styled from "styled-components";

import GlobalStyle from "./component/globalStyle";
import Header from "./component/header/index";
import Month from "./component/month/index";
import Legend from "./component/legend/index";
import MonthProvider from "./store/dateContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MonthProvider>
          <Header />
          <Month />
        </MonthProvider>
        <Legend />
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 420px;
  margin: auto;
  height: 570px;
  background: #4a4a4a;
`;

export default App;
