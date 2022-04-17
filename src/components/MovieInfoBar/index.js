import React from "react";
// styles
import { Wraper, Content } from "./MovieInfoBar.styles";
import { Container } from "../Container";
// helper
import { calcTime, convertMoney } from "../../helpers";

const MovieInfoBar = (props) => (
  <Wraper>
    <Container>
      <Content>
        <div className="column">
          <p>Running Time: {calcTime(props.time)}</p>
        </div>
        <div className="column">
          <p>Budget: {convertMoney(props.budget)}</p>
        </div>
        <div className="column">
          <p>Revenue: {convertMoney(props.revenue)}</p>
        </div>
      </Content>
    </Container>
  </Wraper>
);

export default MovieInfoBar;
