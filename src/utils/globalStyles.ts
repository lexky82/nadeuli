import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
   font-family: "Noto Sans KR", sans-serif;
   margin : 0;
  }

  a{
    text-decoration: none;
    color: "inherit";
  }

  input {
   font-family: "Noto Sans KR", sans-serif;
  }

  input::placeholder {
   color: "#C1C3C3";
  }
`;
