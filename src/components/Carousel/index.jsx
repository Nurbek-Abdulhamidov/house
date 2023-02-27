import { Carousel } from "antd";
import React from "react";
import { useRef } from "react";
import { Arrow, Blur, Container, Content, Img, Wrapper } from "./style";

import img1 from "../../assets/imgs/house.png";
import img2 from "../../assets/imgs/house2.png";

const GenCarousel = () => {
  const slider = useRef();

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

  const texts = [
    {
      id: 1,
      img: img1,
      title: "Highper Pool Partment",
      subChild: " 112 Glenwood Ave Hyde Park, Boston, MA",
      price: "5,250",
    },
    {
      id: 1,
      img: img2,
      title: "Skyper Pool Partment",
      subChild: " 154 Yellowood Ave Hyde Metro, London, MA",
      price: "8,890",
    },
  ];

  return (
    <Container>
      <Carousel ref={slider}>
        {texts.map((value, index) => {
          return (
            <>
              <Wrapper key={index}>
                <Img src={value.img} />
                <Blur />
                <Content>
                  <Content.Title>{value.title}</Content.Title>
                  <Content.Desc className="subChild">
                    {value.subChild}
                  </Content.Desc>
                  <Content.Price>${value.price} / mo</Content.Price>
                </Content>
              </Wrapper>
            </>
          );
        })}
      </Carousel>

      <Arrow data-name="left" onClick={OnMove} left={"true "} />
      <Arrow data-name="right" onClick={OnMove} />
    </Container>
  );
};

export default GenCarousel;
