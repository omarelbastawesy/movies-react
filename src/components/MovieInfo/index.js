import React from "react";
// component
import Thumb from "../Thumb";
// styles
import { Container } from "../Container";
import {
  Wraper,
  Content,
  Type,
  OverView,
  Destruction,
} from "./MovieInfo.styles";

const MovieInfo = (props) => (
  <>
    <Wraper back={props.back}>
      <Container>
        <Content>
          <Thumb image={props.poster} />
          <div className="info">
            <h1>{props.title}</h1>
            <Type>{props.type}</Type>
            <OverView>{props.overview}</OverView>
            <Destruction>
              <div className="rate">
                <h3>RATING</h3>
                <p>{props.rate}</p>
              </div>
              <div className="directors">
                <h3>DIRECTOR</h3>
                <p key={props.key}>{props.dirictor}</p>
              </div>
            </Destruction>
          </div>
        </Content>
      </Container>
    </Wraper>
  </>
);

export default MovieInfo;
