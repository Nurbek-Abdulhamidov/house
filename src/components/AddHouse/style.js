import { Select } from "antd";
import styled from "styled-components";
import { ReactComponent as del } from "../../assets/icons/edit.svg";

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: var(--padding);
  width: 100%;
  margin: auto;

  @media (max-width: 920px) {
    padding: 0px 60px;
  }

  @media (max-width: 570px) {
    padding: 0px 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;

export const MenuWrapper = styled.div`
  padding: 30px;
  border: 1px solid #e6e9ec;
  background-color: white;
`;

export const Section = styled.div`
  display: flex;
  gap: 20px;
  justify-content: ${({ gap }) => (gap ? "space-around" : "start")};
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  margin-bottom: 20px;

  @media (max-width: 1380px) {
    display: ${({ apart }) => (apart ? "grid" : "flex")};
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: 970px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 730px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 630px) {
    display: grid;
    grid-template-columns: repeat(1, 100%);
  }
`;

export const SelectAnt = styled(Select)`
  min-width: 200px;
  width: 100%;
  max-width: 200px;
  .ant-select-selector {
    height: 44px !important ;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

export const IconDelete = styled(del)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: red;
    }
  }
`;
