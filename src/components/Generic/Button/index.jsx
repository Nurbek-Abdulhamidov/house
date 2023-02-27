import React from "react";
import { Container } from "./style";

const Button = ({ width, children, type, onClick, disabled, res }) => {
  return (
    <Container
      res={res}
      disabled={disabled}
      width={width}
      onClick={onClick}
      type={type}
    >
      {children || "Generic button"}
    </Container>
  );
};

export default Button;
