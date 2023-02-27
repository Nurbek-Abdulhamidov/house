import React from "react";
import logoImg from "../../assets/icons/logo.svg";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Link,
  Logo,
  Section,
  Wrapper,
  Main,
  Menu,
  Hamburger,
  LinkedItem,
} from "./style";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
import Filter from "../Filter";
import Footer from "../Footer";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Home = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/signin");
  };
  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate("/home");
    } else {
      navigate(`/${name}`);
    }
  };
  const menu = (
    <Menu>
      <Menu.Item data-name="myprofile" onClick={onClickProfile}>
        My Profile
      </Menu.Item>
      <Menu.Item data-name="myfavourites" onClick={onClickProfile}>
        Favourites
      </Menu.Item>
      <Menu.Item data-name="logout" onClick={onClickProfile}>
        Log out
      </Menu.Item>
    </Menu>
  );

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/properties">Properties</Link>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <>
          <Section border>
            {token ? (
              <>
                <Link rang to="/myprofile">My profile</Link>
              </>
            ) : (
              <Button onClick={onClick} type="primary">
                Sign in
              </Button>
            )}
          </Section>
        </>
      ),
      key: "3",
    },

    {
      label: (
        <>
          <Section border>
            {token ? (
              <LinkedItem >
                <Link rang to="/myfavourites">Favourites</Link>
              </LinkedItem>
            ) : (
              ""
            )}
          </Section>
        </>
      ),
      key: "4",
    },
    {
      label: (
        <>
          <Section>
            {token ? (
              <Section col>
                <div data-name="logout" onClick={onClickProfile}>
                  Log out
                </div>
              </Section>
            ) : (
              ""
            )}
          </Section>
        </>
      ),
      key: "5",
    },
  ];
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section logo onClick={() => navigate("/home")}>
            <Logo src={logoImg} />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            {token ? (
              <Dropdown
                overlay={menu}
                placement="topRight"
                trigger={"click"}
                arrow={{ pointAtCenter: true }}
              >
                <Button type="dark">Profile</Button>
              </Dropdown>
            ) : (
              <Button onClick={onClick} type="dark">
                Sign in
              </Button>
            )}
          </Section>
          <Section down>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Hamburger>
                    <div></div>
                    <div></div>
                    <div></div>
                  </Hamburger>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Home;
