import React from "react";
import { Container } from "./style";

const Button = ({ width,children, type, onClick }) => {
  return (
    <Container width={width} onClick={onClick} type={type}>
      {children || "Generic button"}
    </Container>
  );
};

export default Button;
