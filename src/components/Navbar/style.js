import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Main = styled.div`
  display: flex;
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
  width: 100%;
  max-width: 1440px;

  @media (max-width: 920px) {
    padding: var(--standardPadding);
  }

  @media (max-width: 570px) {
    padding: var(--smallPadding);
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ col }) => (col ? "column" : "row")};
  cursor: ${({ logo }) => (logo ? "pointer" : "")};
  border-bottom: ${({ border }) =>
    border ? "0.5px solid rgba(5, 5, 5, 0.06)" : ""};

  .ant-dropdown {
    height: 200px;
  }
  .active {
    color: yellow;
  }

  h3 {
    margin-bottom: 0;

    @media (max-width: 820px) {
      font-size: 16px;
    }
  }

  :nth-child(4) {
    display: none;
  }

  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    :nth-child(2) {
      display: none;
    }
    :nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 820px) {
    :nth-child(4) {
      display: block;
    }
  }
`;

export const LinkedItem = styled.div`
  color: red;
`;

export const Logo = styled.img`
  margin-right: 12px;

  @media (max-width: 820px) {
    height: 30px;
    width: 30px;
    margin-right: 5px;
  }
`;

export const Link = styled(NavLink)`
  margin: 0 32px;
  text-decoration: none;
  color: ${({ rang }) => (rang ? "black" : "#fff")};

  text-align: center;
`;

export const Menu = styled.div`
  width: 177px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  padding: 16px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba();
`;

Menu.Item = styled.div`
  cursor: pointer;
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 60px;
  cursor: pointer;
  div {
    width: 30px;
    height: 2px;
    background: white;
  }
`;
