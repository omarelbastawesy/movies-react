import styled from "styled-components";

export const Wraper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ back }) => back}), var(--darkGray);
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
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

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: #1c1c1c9e;
  border-radius: 25px;
  overflow: hidden;

  img {
  }

  .info {
    width: 100%;
    padding: 20px 40px;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Type = styled.div`
  font-size: var(--medFont);
  color: var(--white);
  display: flex;
  gap: 0.5rem;
  span {
    border: 1px solid var(--white);
    padding: 0.2rem 0.5rem;
  }
`;

export const OverView = styled.div`
  font-size: var(--medFont);
  color: var(--white);
  margin-top: 1.5rem;
`;

export const Destruction = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 1.5rem;

  h3 {
    color: var(--white);
    font-size: var(--medFont);
  }
  .rate {
    p {
      font-size: var(--medFont);
      padding: 15px;
      background-color: var(--white);
      color: var(--darkGray);
      border-radius: 50%;
    }
  }

  .directors {
    p {
      font-size: var(--medFont);
      margin: 0.7rem 0;
      border-radius: 50%;
    }
  }
`;
