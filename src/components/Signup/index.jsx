import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Button, Input } from "../Generic";
import { Container, Content } from "./style";

const Signup = () => {
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
    request({
      url: "/public/auth/register",
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      if (res) {
        navigate("/signin");
        info();
      }
    });
  };

  return (
    <Container>
      <Content>
        <div className="subTitle">Sign up</div>
        <Input onChange={onChange} type="email" placeholder="email" />
        <Input onChange={onChange} placeholder="firstname" type="text" />
        <Input onChange={onChange} placeholder="lastname" type="text" />
        <Input onChange={onChange} type="password" placeholder="password" />
        <Button onClick={onSubmit} width="%">
          Sign In
        </Button>
      </Content>
    </Container>
  );
};

export default Signup;
