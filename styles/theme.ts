import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Layout = {
  flexRowCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  flexRowStartCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  `,
  flexRowStart: css`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
  `,
  flexRowBetweenCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  flexRowEvenlyCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  `,
  flexColCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexColStart: css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  `,
};
