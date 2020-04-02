import React from "react";
import styled from "styled-components";

import Header from "./components/Header";

const Wrapper = styled.div`
  width: 1024px;
  height: 100vh;
  margin: 0 auto;
  background-color: #f5f5f5;
`;

const App = () => (
  <Wrapper>
    <Header />
    <div>no content</div>
  </Wrapper>
);

export default App;
