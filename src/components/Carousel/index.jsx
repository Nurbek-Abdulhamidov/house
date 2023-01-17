import { Carousel } from "antd";
import React from "react";
import { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";

import img1 from "../../assets/imgs/house.png";
import img2 from "../../assets/imgs/house2.png";

const GenCarousel = () => {
  const slider = useRef();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const OnMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") {
      slider.current.next();
    }
    if (name === "left") {
      slider.current.prev();
    }
  };
  return (
    <Container>
      <Carousel afterChange={onChange} ref={slider}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className="subChild">
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <Content.Price>$5,250 / mo</Content.Price>
      </Content>
      <Arrow data-name="left" onClick={OnMove} left />
      <Arrow data-name="right" onClick={OnMove} />
    </Container>
  );
};

export default GenCarousel;
