import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--medGray); 
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--darkGray); 
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #1c1c1cd9; 
  }

  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGray: #eee;
    --medGray: #353535;
    --darkGray: #1c1c1c;
    --superBigFont: 2.5rem;
    --bigFont: 1.5rem;
    --medFont: 1.2rem;
    --smallFont: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin:0;
    padding:0;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`;
