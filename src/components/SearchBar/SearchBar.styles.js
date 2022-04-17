import styled from "styled-components";

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGray);
`;

export const Contain = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
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

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGray);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
  overfelw: hidden;

  img {
    position: absolute;
    width: 30px;
    top: 13px;
    left: 15px;
  }

  input {
    position: absolute;
    width: 95%;
    height: 100%;
    padding: 12px;
    left: 0;
    margin-left: 5%;
    font-size: 25px;
    color: white;
    background: transparent;
    border: 0;

    :focus {
      outline: none;
    }
  }
`;
