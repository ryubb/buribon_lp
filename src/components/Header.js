import React from "react";
import styled from "styled-components";

const contents = [
  { name: "About me" },
  { name: "Career" },
  { name: "Product" },
  { name: "My language" },
  { name: "Contact" },
  { name: "test" }
];

const Wrapper = styled.div``;

const Header = () => (
  <Wrapper>
    {contents.map(content => (
      <p>{content.name}</p>
    ))}
  </Wrapper>
);

export default Header;
