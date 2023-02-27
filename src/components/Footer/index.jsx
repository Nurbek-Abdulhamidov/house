import { Container, Content, Icon, Wrapper } from "./style";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Content.Title>Contact us</Content.Title>
          <Content.Item>
            <Icon.Email />
            Bunyodkor ko'chasi, Chilonzor 64-dom, 2---etaj, 1-xona, Webbrain
            Academy
          </Content.Item>
          <Content.Item>
            <Icon.Phone /> +998 33 576 2020
          </Content.Item>
          {/* <Content.Item>
            <Icon.Email />
            webbrainacademy@gmail.com
          </Content.Item> */}
        </Content>
        <Content>
          <Content.Title>Discover</Content.Title>
          <Content.Item>Uzbekistan</Content.Item>
          <Content.Item>India</Content.Item>
          <Content.Item>UAE</Content.Item>
          <Content.Item>Korea</Content.Item>
        </Content>
        <Content>
          <Content.Title>Lists by Category</Content.Title>{" "}
          <Content.Item>Frontend</Content.Item>
          <Content.Item>Backend</Content.Item>
          <Content.Item>Mobile</Content.Item>
          <Content.Item>Flutter</Content.Item>
          <Content.Item>Android</Content.Item>
        </Content>
        <Content>
          <Content.Title>Lists by Category</Content.Title>{" "}
          <Content.Item>t.me/webbrain_admin</Content.Item>
          <Content.Item>t.me/webbrain_ceo</Content.Item>
          <Content.Item>instagram.com/webbrain_admin</Content.Item>
          <Content.Item>instagram.com/smd_94</Content.Item>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Footer;
