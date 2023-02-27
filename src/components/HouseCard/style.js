import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as like } from "../../assets/icons/like.svg";

export const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 343px;
  max-height: 429px !important;
  height: 429px;
  cursor: pointer;
  padding: ${({ gap }) => {
    return gap && `${gap}px`;
  }};

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px) rgba(0, 0, 0, 0.06)
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

export const Img = styled.img`
  width: 100%;
  min-height: 200px;
  max-height: 220px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
  padding-top: 24px;
  padding: 16px 20px;
  background-color: white;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ row }) => (row ? "row" : " column")};
  align-items: ${({ footer }) => !footer && "center"};
`;

export const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(like)`
  width: 27px;
  height: 27px;
  padding: 6px;
  background-color: ${({ favorite }) => (favorite ? "red" : "#f6f8f9")};
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  & path {
    fill: ${({ favorite }) => favorite && "white"};
  }

  :active {
    transform: scale(0.9);
  }
`;

export const Divider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;
