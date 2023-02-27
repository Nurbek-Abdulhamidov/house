import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/Email.svg";
import { ReactComponent as cardmaps } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardmaps.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  padding: 48px 0;
  background: #f5f7fc;
`;

export const Content = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
  text-align: center;
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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 130px;
  max-width: 1440px;
  width: 100%;
  @media (max-width: 920px) {
    padding: 96px 60px;
  }

  @media (max-width: 570px) {
    padding: 96px 30px;
  }

  @media (max-width: 1120px) {
    display: grid;
    grid-template-columns: auto auto;
  }

  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: auto;
  }
`;

export const Icon = styled.div``;

Icon.Email = styled(email)`
  margin-bottom: 24px;
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardmaps)`
  margin-bottom: 24px;
`;
