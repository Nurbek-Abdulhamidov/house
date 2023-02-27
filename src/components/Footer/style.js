import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/email 1.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  padding: 48px 0;
  background: #0d263b;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;

Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;

  @media (max-width: 760px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 10px;
  }

  @media (max-width: 680px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
  padding: 0 130px;
  max-width: 1440px;

  @media (max-width: 1260px) {
    display: grid;
    gap: 10px;
    grid-template-columns: auto auto;
  }
  @media (max-width: 680px) {
    gap: 10px;
    grid-template-columns: auto;
  }
`;

export const Icon = styled.div``;

Icon.Email = styled(email)`
  margin-bottom: 24px;
  margin-right: 20px;
  width: 55px;
  & path {
    fill: #fff;
  }
`;
Icon.Phone = styled(phone)`
  margin-bottom: 24px;
  margin-right: 20px;
`;
