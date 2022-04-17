import styled from "styled-components";

export const Wraper = styled.div`
  background: var(--medGray);
  height: calc(100vh - 59.48px);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  h1 {
    font-size: 15rem;
    margin: 0;
  }

  p {
    font-size: var(--medFont);
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 10rem;
    }

    p {
      font-size: var(--smallFont);
    }
  }
`;
