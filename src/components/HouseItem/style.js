import styled from "styled-components";
import { ReactComponent as Share } from "../../assets/icons/share.svg";
import { ReactComponent as Love } from "../../assets/icons/heart.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => `${gap}px `};
  margin: 10px 0;

  gap: 24px;
  ~ .user {
    background-color: #fff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 24px;
    padding: 24px;

    @media (max-width: 920px) {
      margin-left: 0;
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  max-width: var(--width);
  padding: var(--padding);
  margin: auto;
  width: 100%;
  padding-bottom: 48px;

  @media (max-width: 920px) {
    padding: var(--standardPadding);
    flex-direction: column;
  }

  @media (max-width: 570px) {
    padding: var(--smallPadding);
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: ${({ flex }) => flex && "center"};
  justify-content: ${({ flex }) => !flex && "center"};
  flex-direction: ${({ flex }) => !flex && "column"};

  del {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-decoration-line: line-through;
    color: #696969;
    margin-right: 15px;
  }
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;

  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Icons = styled.div``;

Icons.Share = styled(Share)`
  display: flex;
  padding: 8px;
  background-color: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Love = styled(Love)`
  display: flex;
  padding: 8px;
  background-color: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
  flex-wrap: wrap;
`;

Details.Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;

export const Description = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  margin-bottom: 48px;
`;

export const User = styled.div``;

User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  padding: var(--padding);
  max-width: 1440px;
  width: 100%;
  margin: auto;
  margin-bottom: 24px;
  margin-top: 24px;
  @media (max-width: 920px) {
    flex-direction: column;
    padding: var(--standardPadding);
  }
  @media (max-width: 570px) {
    padding: var(--smallPadding);
  }
`;

ImageContainer.Main = styled.img`
  width: 100%;
  max-width: 580px;
  max-height: 400px;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;

  @media (max-width: 920px) {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
  }
`;

ImageContainer.Subimg = styled.img`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;

  @media (max-width: 920px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Blur = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  color: white;
  font-family: bold;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

Blur.Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;
