import styled from "styled-components";

export default function Burger() {
  return (
    <Container>
      <span className="line line1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </Container>
  );
}

const Container = styled.div`
  height: 26px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > span {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: white;
  }
`;
