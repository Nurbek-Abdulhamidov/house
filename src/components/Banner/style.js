import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrowTop.svg";

export const Container = styled.div`
  position: relative;
  height: fit-content;
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
  background: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  max-width: 566px;
  width: 100%;
`;
