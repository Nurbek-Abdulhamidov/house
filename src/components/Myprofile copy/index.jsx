import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../Generic";
import { Container, Icons, User, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import noimg from "../../assets/imgs/no-image.jpg";
import { Table } from "antd";
const { REACT_APP_BASE_URL: url } = process.env;

const Myprofile = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  const columns = [
    {
      title: "Listing title",
      key: "name",
      width: 150,
      render: (data) => (
        <User>
          <User.Img
            src={(data?.attachments && data?.attachments[0]?.imgPath) || noimg}
          />
          <User flex>
            <div className="subTitle">
              {data.address || "no address"} , {data.country || "no country"}
            </div>
            <div className="info">
              {data.city || "no address"} {data.region}
            </div>
            <div className="info">
              <del>{data.salePrice || "no price"} </del>
            </div>
          </User>
          <div style={{ marginLeft: "auto" }}>
            <Button>For sale</Button>
          </div>
        </User>
      ),
    },
    {
      title: "Year Build",
      render: (data) => <span>{data?.houseDetails.yearBuilt}</span>,
      key: "houseDetails.yearBuilt",
      width: 150,
    },
    {
      title: "Email",
      render: (data) => <span>{data.user.email}</span>,
      key: "email ",
    },
    {
      title: "Price",
      render: (data) => <span>${data.price}</span>,
      key: "price",
      width: 150,
    },
    {
      title: "Action",
      key: "email ",
      render: () => {
        return (
          <div>
            <Icons.Edit />
            <Icons.Delete />
          </div>
        );
      },
    },
  ];

  return (
    <Wrapper>
      <User>
        <div className="title" style={{ textAlign: "start" }}>
          Myprofile
        </div>
        <div className="title" style={{ marginLeft: "auto " }}>
          <Button onClick={() => navigate("/myprofile/newhouse")}>
            Add House
          </Button>
        </div>
      </User>
      <Container>
        <Table dataSource={data} columns={columns} />
      </Container>
    </Wrapper>
  );
};

export default Myprofile;
