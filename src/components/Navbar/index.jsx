import React from "react";
import logoImg from "../../assets/icons/logo.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Link, Logo, Section, Wrapper ,Main} from "./style";
import { navbar } from "../../utils/navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
      <Wrapper>
        <Section logo onClick={() => navigate("/home")}>
          <Logo src={logoImg} />
          <h3>Houzing</h3>
        </Section>
        <Section>
          {navbar.map(({ title, path }, index) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>Sign in</button>
        </Section>
      </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Home;
