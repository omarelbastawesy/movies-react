import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  @media (min-width: 1399px) {
    max-width: 1280px;
  }
  @media (max-width: 1400px) {
    max-width: 1280px;
  }
  @media (max-width: 1200px) {
    max-width: 1100px;
  }
  @media (max-width: 992px) {
    max-width: 950px;
  }
  @media (max-width: 768px) {
    max-width: 750px;
  }
  @media (max-width: 400px) {
    max-width: 375px;
  }
`;
