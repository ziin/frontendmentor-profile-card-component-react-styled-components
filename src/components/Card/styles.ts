import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 360px;
    background-color: ${theme.colors.white};
    margin: ${theme.sizes[3]};
    border-radius: ${theme.radii["2xl"]};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    height: 144px;
    background: url("./bg-pattern-card.svg") no-repeat center;
    border-top-right-radius: ${theme.radii["2xl"]};
    border-top-left-radius: ${theme.radii["2xl"]};
    background-size: cover;

    /* avatar positioning */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 112px;
      position: relative;
      bottom: -50%;
      border-radius: ${theme.radii.full};
      border: ${theme.sizes[1]} solid ${theme.colors.white};
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    height: 148px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 16px;

    /* text */
    line-height: ${theme.lineHeights[7]};
    color: ${theme.colors.gray[100]};
    strong {
      color: ${theme.colors.black};
      font-size: ${theme.fontSizes.lg};
    }
    span {
      font-size: ${theme.fontSizes.sm};
    }
  `}
`;
export const Footer = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid #eee;
    height: 96px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;

      /* text */
      letter-spacing: ${theme.letterSpacings.wide};
      line-height: ${theme.lineHeights[5]};
      strong {
        font-size: ${theme.fontSizes.lg};
      }
      span {
        text-transform: capitalize;
        font-size: ${theme.fontSizes.xs};
        color: ${theme.colors.gray[100]};
      }
    }
  `}
`;
