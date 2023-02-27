import React, { useContext } from "react";
import { Container, Content, Details, Divider, Icons, Img } from "./style";
import noImg from "../../assets/imgs/no-image.jpg";
import { message } from "antd";
import { PropertiesContext } from "../../context/properties";

const HouseCard = ({ onClick, data = {}, gap }) => {
  const [{ refetch }] = useContext(PropertiesContext);
  const {
    price,
    salePrice,
    address,
    city,
    country,
    description,
    houseDetails,
    attachments,
    category,
    favorite,
    id,
  } = data;

  const save = (event) => {
    event?.stopPropagation();
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (!favorite) {
          res?.success && message.info("Succefully liked");
        } else {
          res?.success && message.warning("Succefully disliked");
        }
        refetch && refetch(); 
      });
  };

  return (
    <Container gap={gap} onClick={onClick}>
      <Img src={(attachments && attachments[0]?.imgPath) || noImg} />
      <Content>
        <div className="subTitle inline">
          {city},{country},{description}
        </div>
        <div className="info">
          {address || "Quincy St, Brooklyn, NY, USA"} -{" "}
          {category?.name || "Category"} {houseDetails?.room || 0} - rooms
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {houseDetails?.beds || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath {houseDetails?.bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">Garage {houseDetails?.garage || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">Area {houseDetails?.area || 0} kv</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">${salePrice || 0}/mo</div>
          <div className="subChild">${price || 0}/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love onClick={save} favorite={favorite} />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
