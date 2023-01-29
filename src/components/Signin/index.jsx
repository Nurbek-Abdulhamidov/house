import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Button, Input } from "../Generic";
import { Container, Content } from "./style";

const Recent = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const info = () => {
    message.info("Succefully logged in");
  };

  const onSubmit = async () => {
    console.log(body);
    request({ url: "/public/auth/login", method: "POST", body, me: true }).then(
      (res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
        }
        info();
      }
    );
  };

  return (
    <Container>
      <Content>
        <div className="subTitle">Sign In</div>
        <Input onChange={onChange} type="email" placeholder="email" />
        <Input onChange={onChange} type="password" placeholder="password" />
        <Button onClick={onSubmit} width="%">
          Sign In
        </Button>
      </Content>
    </Container>
  );
};

export default Recent;
