import React from "react";
import { Blur, Container, Content,  Img } from "./style";
import noImg from "../../assets/imgs/noimg.jpg";
import category from "../../assets/imgs/category.png";

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={category || noImg} />
      <Blur />
      <Content>{name || "Category"}</Content>
    </Container>
  );
};

export default CategoryCard;
