import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Content } from "./style";
import HouseCard from "../HouseCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Recommended = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    appendDots: (dots) => <h1>{dots}</h1>,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          centerPadding: "-10px",
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

  return (
    <Container>
      <Content>
        <Content.Title>Recommended</Content.Title>
        <Content.Desc>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Content.Desc>
      </Content>
      <Slider {...settings}>
        {data.map((value, index) => {
          return (
            <HouseCard
              gap={10}
              onClick={() => navigate(`/properties/${value?.id}`)}
              data={value}
              key={index}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recommended;
