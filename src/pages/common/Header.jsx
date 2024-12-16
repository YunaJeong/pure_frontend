import styled from "styled-components";
import Burger from "./Burger";
import { Link, useLocation } from "react-router-dom";
import Search from "../../assets/search.svg?react";
import User from "../../assets/user.svg?react";
import Cart from "../../assets/cart.svg?react";
import { useEffect, useState } from "react";

export default function Header() {
  const path = useLocation().pathname;
  const [scroll, setScroll] = useState(0);
  const [username, setUsername] = useState("");

  const handleLogout = () => {
    sessionStorage.removeItem("name");
    setUsername("");
  };

  useEffect(() => {
    const scrollHandler = () => {
      var targetDiv = document.getElementById("targetDiv");
      var scrollPosition = window.scrollY;

      setScroll(scrollPosition);
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scroll]);

  useEffect(() => {
    const name = sessionStorage.getItem("name");
    if (name) {
      setUsername(name);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <HeaderContainer className={scroll > 500 || path !== "/" ? "on" : ""}>
      <Container>
        <div />
        <ButtonContainer>
          {!username && (
            <Link to="/login">
              <b>로그인</b>
            </Link>
          )}
          {!username && (
            <Link to="/register">
              <b>회원가입</b>
            </Link>
          )}
          {username && (
            <Link to="/">
              <b>안녕하세요 {username}님</b>
            </Link>
          )}
          {username && (
            <Link to="/" onClick={handleLogout}>
              <b>로그아웃</b>
            </Link>
          )}
        </ButtonContainer>
      </Container>
      <Container style={{ height: "60px" }}>
        <ButtonContainer>
          <Burger />
          <Link to="/" className="logo">
            PURE SHOP
          </Link>
        </ButtonContainer>
        <ButtonContainer>
          <Search />
          <User />
          <Cart />
        </ButtonContainer>
      </Container>
    </HeaderContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 40px;

  & > a,
  div {
    margin: 0 15px;
    font-size: 0.8rem;
  }

  & .logo {
    font-size: 20px;
    font-weight: 700;
  }

  & > svg {
    width: 30px;
    height: 30px;
    margin: 15px;
    cursor: pointer;
  }
`;

const Container = styled.header`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: transparent;
  z-index: 10;
  color: white;
  transition: 0.3s;
  & svg path {
    fill: white;
  }
  &.on {
    background: white;
    color: black;
    & svg path {
      fill: black;
    }
    & .line {
      background: black;
    }
  }
`;
