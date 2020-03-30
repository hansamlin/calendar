import React from "react";
import styled from "styled-components";

import GlobalStyle from "./component/globalStyle";
import Header from "./component/header/index";
import Month from "./component/month/index";
import Legend from "./component/legend/index";
import Provider from "./store/context";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Provider>
          <Header />
          <Month />
        </Provider>
        <Legend />
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 420px;
  margin: auto;
  background: #4a4a4a;
`;

export default App;
