import styled from "styled-components";

export const getType = ({ type }) => {
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

const getWidth = ({ width }) => {
  if (!width) return "130px";
  else if (`${width}`.includes("%")) return "100%";
  else return `${width}px`;
};

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  cursor: pointer;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  width: ${getWidth};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  ${getType};

  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  :active {
    opacity: 0.7;
  }

  @media (max-width: 875px) {
    width: ${({ res }) => (res ? "100%" : `${getWidth}`)};
  }
`;
