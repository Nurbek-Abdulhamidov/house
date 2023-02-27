import styled from "styled-components";
import { Tabs } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  background-color: #e6e9ec;
  width: 100%;

  @media (max-width: 920px) {
    padding: 0px 60px;
  }

  @media (max-width: 570px) {
    padding: 0px 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 30px;
  gap: 30px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;

  @media (max-width: 570px) {
    padding: 30px 15px;
  }
`;

export const AntTabs = styled(Tabs)`
  max-width: 580px;
  width: 100%;
  margin: 64px;
`;
