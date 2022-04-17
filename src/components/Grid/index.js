import React from "react";
// styles
import { Wraper, Content } from "../Grid/Grid.styles";
import { Container } from "../Container";

const Grid = ({ header, children }) => (
  <Wraper>
    <Container>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Container>
  </Wraper>
);

export default Grid;
