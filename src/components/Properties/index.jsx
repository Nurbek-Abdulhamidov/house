import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HouseCard from "../HouseCard";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";
const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  // const request = useRequest();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
    // request({ url: `/houses/list${search}` });
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <>
      <div className="title">Properties</div>
      <div className="info" style={{ textAlign: "center", margin: "0 50px" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Container>
        {data.map((value, index) => {
          return (
            <HouseCard
              onClick={() => onSelect(value?.id)}
              key={index}
              data={value}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Properties;
