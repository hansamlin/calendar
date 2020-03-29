import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #4a4a4a;
  font-weight: 600;
}

#root {
  display: flex;
  height: 100vh;
}

`;

export default globalStyle;
