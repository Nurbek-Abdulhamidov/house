import React from "react";
import { Container } from "./style";

const Button = ({ children, type, onClick }) => {
  return (
    <Container onClick={onClick} type={type}>
      {children || "Generic button"}
    </Container>
  );
};

export default Button;
