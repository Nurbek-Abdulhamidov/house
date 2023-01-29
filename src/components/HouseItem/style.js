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

  gap: 24px;
  ~ .user {
    background-color: #fff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 24px;
    padding: 24px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  max-width: var(--width);
  padding: var(--padding);
  margin: auto;
  width: 100%;
  padding-bottom: 48px;
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
