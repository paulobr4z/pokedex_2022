import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  min-height: 100vh;

  @media (max-width: 620px) {
    margin: unset;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;
