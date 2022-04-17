import React from "react";
import { Link } from "react-router-dom";
// styles
import { Wraper, Content } from "./BreadCrumb.styles";
import { Container } from "../Container";

const BreadCrumb = ({ movieTitle }) => (
  <Wraper>
    <Container>
      <Content>
        <Link to="/movies-react">
          <span>Home</span>
        </Link>
        <span> | </span>
        <span>{movieTitle}</span>
      </Content>
    </Container>
  </Wraper>
);

export default BreadCrumb;
