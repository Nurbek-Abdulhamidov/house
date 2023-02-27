import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Content } from "./style";
import CategoryCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const GenCarousel = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,
    speed: 500,
    dots: true,
    appendDots: (dots) => <h1>{dots}</h1>,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          centerPadding: "-10px",
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "-10px",
        },
      },
    ],
  };

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

  return (
    <Container>
      <Content>
        <Content.Title>Category</Content.Title>
        <Content.Desc>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Content.Desc>
      </Content>
      <Slider {...settings}>
        {data.map((value, index) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category_id=${value?.id}`)}
              data={value}
              key={index}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default GenCarousel;
