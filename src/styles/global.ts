import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-size: ${theme.fontSizes.md};
      font-family: ${theme.fonts.body};
    }
  `}
`;
