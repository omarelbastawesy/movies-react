import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  transition: 0.3s;
  animation: animateThumb 0.5s;
  object-fit: cover;

  :hover {
    opacity: 0.7;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ConThumb = styled.div`
  border-radius: 30px;
  overflow: hidden;
`;
