import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrowTop.svg";

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

export const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  background-color: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (left ? "rotate(90deg)" : "rotate(-90deg)")};
  right: ${({ left }) => left && "20px"};
  left: ${({ left }) => !left && "20px"};
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-bottom: 32px;
`;

Content.Desc = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;
Content.Price = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
