import styled from "styled-components";

export const Wraper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGray);
  background-size: 100%, cover;
  background-position: center;
  height: 75vh;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Text = styled.div`
  z-index: 100;
  position: absolute;
  max-width: 700px;
  bottom: 50px;
  min-height: 100px;

  h1 {
    font-size: var(--superBigFont);

    @media (max-width: 768px) {
      font-size: var(--bigFont);
    }
  }

  p {
    font-size: var(--medFont);

    @media (max-width: 768px) {
      font-size: var(--smallFont);
      max-width: 100%;
    }
  }
`;
