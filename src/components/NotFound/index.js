import React from "react";
// styled
import { Wraper, Content } from "./NotFound.styles";
import { Container } from "../Container";

const NotFound = () => {
  return (
    <Wraper>
      <Container>
        <Content>
          <h1>404</h1>
          <p>Not Found Page</p>
        </Content>
      </Container>
    </Wraper>
  );
};

export default NotFound;
