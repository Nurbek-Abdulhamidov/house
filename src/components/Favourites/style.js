import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: var(--padding);
  margin-top: 70px;

  @media (max-width: 920px) {
    padding: 96px 60px;
  }

  @media (max-width: 570px) {
    padding: 96px 20px;
  }
`;
