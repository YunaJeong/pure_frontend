import styled from "styled-components";

export default function Footer() {
  return <Container>© Copyright PURE SHOP 2024 All right reserved </Container>;
}

const Container = styled.footer`
  margin: 0 auto;
  margin-top: 100px;
  box-sizing: border-box;
  width: 1200px;
  padding: 50px 0;
  border-top: 1px solid #dedede;
  text-align: center;
  color: #a4a4a4;
`;
