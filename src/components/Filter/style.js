import styled from "styled-components";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as house } from "../../assets/icons/houses.svg";

export const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
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
  /* border: 1px solid #e6e9ec; */
`;

export const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
