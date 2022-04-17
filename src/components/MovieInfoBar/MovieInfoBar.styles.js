import styled from "styled-components";

export const Wraper = styled.div`
  background-color: var(--darkGray);
  padding: 2rem 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  gap: 1rem;

  .column {
    background-color: var(--medGray);
    padding: 0.2rem 2rem;
    min-width: 30%;
    border-radius: 35px;

    p {
      text-align: center;
      min-width: 100%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;

    .column {
      min-width: 100%;
    }
  }
`;
