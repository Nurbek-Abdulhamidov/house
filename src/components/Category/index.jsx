import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "./style";
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
  };

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

  return (
    <Container>
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
