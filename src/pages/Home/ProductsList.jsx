import styled from "styled-components";
import Product from "./Product";
import items from "../../products.json";

export default function ProductList() {
  return (
    <Container>
      <h1>오늘의 상품</h1>
      <p>오늘의 할인 상품을 만나보세요.</p>
      <ProductContainer>
        {items.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </ProductContainer>
    </Container>
  );
}

const ProductContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const Container = styled.div`
  width: 1200px;
  margin: 50px auto;
  padding: 100px 0;
  border-top: 1px solid #dedede;

  & > h1 {
    text-align: center;
  }

  & > p {
    text-align: center;
  }
`;
