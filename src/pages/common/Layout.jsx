import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Container>
      <Header>Header</Header>
      <Outlet />
      <Footer>Footer</Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
`;
