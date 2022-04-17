import styled from "styled-components";

export const Wraper = styled.div`
  h1 {
    color: var(--medGray);

    @media (max-width: 768px) {
      font-size: var(--bigFont);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.2rem;
`;
