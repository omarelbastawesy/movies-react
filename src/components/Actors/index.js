import React from "react";
//styles
import { Wraper, Image } from "./Actors.styles";

const Actor = (props) => (
  <Wraper>
    <Image src={props.url} alt="Actor Thumb" />
    <h3>{props.name}</h3>
    <p>{props.character}</p>
  </Wraper>
);

export default Actor;
