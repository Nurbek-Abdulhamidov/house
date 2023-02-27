import { useLocation } from "react-router-dom";
import HouseCard from "../HouseCard";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useContext } from "react";
import { PropertiesContext } from "../../context/properties";
const { REACT_APP_BASE_URL } = process.env;

const Favourite = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [, dispatch] = useContext(PropertiesContext);

  const { refetch ,data} = useQuery(
    [search],
    () => {
      return fetch(`${REACT_APP_BASE_URL}/houses/getAll/favouriteList`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        dispatch({ type: "refetch", payload: refetch });
      },
    }
  );


  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <>
      <div className="title">Favourite</div>
      <div className="info" style={{ textAlign: "center" ,margin:"0 50px"}}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Container>
        {data?.data.length ? (
          data?.data?.map((value, index) => {
            return (
              <HouseCard
                onClick={() => onSelect(value?.id)}
                key={index}
                data={value}
              />
            );
          })
        ) : (
          <h1>No Data Found</h1>
        )}
      </Container>
    </>
  );
};

export default Favourite;
