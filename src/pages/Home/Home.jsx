import styled from "styled-components";
import Nav from "./Nav";
import Brand from "./Brand";
import Banner from "./Banner";
import ProductList from "./ProductsList";

export default function Home() {
  return (
    <Container>
      <Banner />
      <Nav />
      <Brand />
      <ProductList />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`;
