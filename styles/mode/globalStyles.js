import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.globalBackgroundColor};
    color: ${({ theme }) => theme.globalTextColor};
    font-family: "Satoshi-Variable";
    margin: 0;
    transition: all 0.50s linear;
    & *::-webkit-scrollbar {
      height: 0.5em;
    }
 
    & *::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.globalScrollBarTrackBackground};
    }
 
    & *::-webkit-scrollbar-thumb {
      // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
      background-color: ${({ theme }) => theme.globalScrollBarThumbBackground};
      outline: ${({ theme }) => theme.globalScrollBarBorder};
    }
  }
`;
