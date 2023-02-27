import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  padding: 96px 130px;
  max-width: 1440px;
  width: 100%;

  @media (max-width: 920px) {
    padding: 96px 60px;
  }

  @media (max-width: 570px) {
    padding: 96px 30px;
  }
`;

export const Content = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

Content.Desc = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
`;
