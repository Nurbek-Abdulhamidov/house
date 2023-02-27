import { AntTabs, Container } from "./style";
import Signup from "../Signup";
import Signin from "../Signin";

const Register = () => {
  const onChangeTab = (key) => {
    console.log(key);
  };
  return (
    <Container>
      <AntTabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: `Sign in`,
            children: <Signin />,
          },
          {
            key: "2",
            label: `Sign up`,
            children: <Signup />,
          },
        ]}
        onChange={onChangeTab}
      />
      ;
    </Container>
  );
};

export default Register;
