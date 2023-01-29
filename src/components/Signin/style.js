import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrowTop.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  background-color: #e6e9ec;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 580px;
  background-color: white;
  padding: 30px;
  margin: 64px;
  gap:30px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;
