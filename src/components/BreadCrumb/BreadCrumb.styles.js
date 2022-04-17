import styled from "styled-components";

export const Wraper = styled.div`
  background: var(--medGray);
  padding: 1rem;
  color: var(--white);
`;

export const Content = styled.div`
  font-size: var(--medFont);

  a {
    text-decoration: none;
  }

  span {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: var(--smallFont);
  }
`;
