import styled from "styled-components";

export const Wraper = styled.div`
  color: var(--white);
  background-color: var(--darkGray);
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 15px;
  object-fit: cover;
`;
