import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--colorPrimary);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  max-width: 1440px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => (logo ? "pointer" : "")};
  .active {
    color: yellow;
  }
`;

export const Logo = styled.img`
  margin-right: 12px;
`;

export const Link = styled(NavLink)`
  margin: 0 32px;
  text-decoration: none;
  color: #fff;
`;
