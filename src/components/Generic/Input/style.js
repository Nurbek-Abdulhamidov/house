 import { forwardRef } from "react";
import styled from "styled-components";

export const getType = ({ type,ref }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "light":
      return {
        background: "#fff",
        border: "1px solid #e6e9ec",
        color: "#0d263e",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "#fff",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#fff",
      };
  }
};

export const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;

  outline: none;
  border: 1px solid #e6e9ec;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  padding-left: ${({ icon }) => (icon ? "40px" : "20px")};
  /* ${getType}; */
  :focus {
    border: 1px solid #0061df;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
