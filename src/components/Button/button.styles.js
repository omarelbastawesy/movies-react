import styled from "styled-components";

export const Wraper = styled.button`
  display: flex;
  padding: 1rem 10rem;
  margin: 20px auto;
  border: 0;
  background-color: var(--darkGray);
  font-size: var(--superBigFont);
  border-radius: 50px;
  color: var(--white);
  cursor: pointer;

  :hover {
    background-color: var(--medGray);
  }

  @media (max-width: 768px) {
    font-size: var(--bigFont);
    padding: 0.7rem 4rem;
  }
`;
