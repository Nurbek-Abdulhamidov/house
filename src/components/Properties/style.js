import styled from "styled-components";

export const Container = styled.div`
  /* display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr)); */
  grid-gap: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: var(--padding);
  margin-top: 70px;

  @media (max-width: 920px) {
    padding: var(--standardPadding);
  }

  @media (max-width: 570px) {
    padding: var(--smallPadding);
  }
`;
