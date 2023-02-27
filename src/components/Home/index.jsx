import React from "react";
import Carousel from "../Carousel";
import Category from "../Category";
import Recent from "../Recent";
import Banner from "../Banner";
import Recommended from "../Recommended";
import Why from "../Why";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
     <Banner />
       <Recent />
    </Container>
  );
};

export default Home;
