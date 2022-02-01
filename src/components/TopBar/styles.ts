import styled, { css, CSSProp } from 'styled-components';

export const ContainerTopBar = styled.div`
  height: 80px;
  width: 100%;
  margin-bottom: 32px;

  main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;

    .logo {
      height: 80px;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        cursor: pointer;
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
    column-gap: 32px;

    p {
      color: white;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;