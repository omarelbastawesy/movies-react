import React from "react";

// routting
import { Link } from "react-router-dom";

// Images
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

// Styles
import { Wrapper, Content, LogoImg } from "./Header.styles";
import { Container } from "../Container";

const Header = () => (
  <Wrapper>
    <Container>
      <Content>
        <Link to="/movies-react">
          <LogoImg src={RMDBLogo} alt="rmdb-img" />
        </Link>
        <LogoImg src={TMDBLogo} alt="tmdb-img" />
      </Content>
    </Container>
  </Wrapper>
);

export default Header;
