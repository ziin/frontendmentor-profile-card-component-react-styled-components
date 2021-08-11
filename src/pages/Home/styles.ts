import styled from "styled-components";

export const Container = styled.main`
  /* background */
  min-height: 100vh;
  background: aliceblue;
  background-image: url(./bg-pattern-top.svg), url(./bg-pattern-bottom.svg);
  background-repeat: no-repeat, no-repeat;
  background-color: ${({ theme }) => theme.colors.cyan[100]};
  background-position: bottom 45vh right 50vw, top 45vh left 50vw;

  /* center elements */
  display: flex;
  justify-content: center;
  align-items: center;
`;
