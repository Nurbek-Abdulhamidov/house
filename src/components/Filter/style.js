import styled from "styled-components";
import { Select } from "antd";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as house } from "../../assets/icons/houses.svg";

export const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: 10px auto;
  @media (max-width: 920px) {
    padding: var(--standardPadding);
    display: grid;
    gap: 10px;
    grid-template-columns: auto;
  }

  @media (max-width: 570px) {
    padding: var(--smallPadding);
  }
`;

export const Icons = styled.div``;

Icons.Setting = styled(setting)`
  margin-right: 8px; ;
`;
Icons.Search = styled(search)`
  margin-right: 8px; ;
`;
Icons.Houses = styled(house)`
  margin-right: 8px; ;
`;

export const MenuWrapper = styled.div`
  padding: 15px;
  background-color: white;


`;

export const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 1098px) {
    display: grid;
    grid-template-columns: auto auto;
  }

  @media (max-width: 510px) {
    display: grid;
    grid-template-columns: auto;
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
