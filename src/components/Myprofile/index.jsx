import { useLocation } from "react-router-dom";
import { Button } from "../../components/Generic";
import { Container, Icons, User, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import noimg from "../../assets/imgs/no-image.jpg";
import { message, Table } from "antd";
import useRequest from "../../hooks/useRequest";
import { useQuery } from "react-query";
const { REACT_APP_BASE_URL: url } = process.env;

const Myprofile = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  const { data, refetch } = useQuery([search], () => {
    return request({ url: `/houses/me`, token: true });
  });

  const onDelete = (id) => {
    return request({
      url: `/houses/${id}`,
      token: true,
      method: "DELETE",
    }).then((res) => {
      if (res?.success) {
        message.info("Successfully deleted");
        refetch();
      }
    });
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
      render: (data) => {
        return (
          <div>
            <Icons.Edit
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/myprofile/edithouse/${data?.id}`);
              }}
            />
            <Icons.Delete
              onClick={(event) => {
                event.stopPropagation();
                onDelete(data?.id);
              }}
            />
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
        <Table
          onRow={(record) => {
            return {
              onClick: () => {
                navigate(`/properties/${record?.id}`);
              },
            };
          }}
          dataSource={data?.data}
          columns={columns}
        />
      </Container>
    </Wrapper>
  );
};

export default Myprofile;
