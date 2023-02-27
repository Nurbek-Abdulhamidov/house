import styled from "styled-components";
import { Tabs } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  background-color: #e6e9ec;
  width: 100%;

  .ant-tabs-nav-wrap {
    @media (max-width: 920px) {
      padding: 0px 60px;
    }

    @media (max-width: 570px) {
      padding: 0px 20px;
    }
  }
`;

export const AntTabs = styled(Tabs)`
  max-width: 580px;
  width: 100%;
  margin: 64px;
`;
