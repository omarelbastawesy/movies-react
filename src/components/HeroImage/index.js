import React from "react";
// styled
import { Wraper, Text } from "./HeroImage.styles";
import { Container } from "../Container";

const HeroImage = (props) => (
  <Wraper image={props.image}>
    <Container>
      <Text>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </Text>
    </Container>
  </Wraper>
);

export default HeroImage;
