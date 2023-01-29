import React from "react";
import { Button } from "../Generic";
import { Blur, Container, Content, Img } from "./style";

import img2 from "../../assets/imgs/house2.png";

const Banner = () => {
  return (
    <Container>
      <Img src={img2} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Content.Title>
        <Button>Read More</Button>
      </Content>
    </Container>
  );
};

export default Banner;
