import styled from "styled-components";

const list = [
  {
    title: "MISSHA",
    name: "미샤",
    color: "black",
  },
  {
    title: "A'pieu",
    name: "어퓨",
    color: "blue",
  },
  {
    title: "CHOGONGJIN",
    name: "초공진",
    color: "green",
  },
  {
    title: "stila",
    name: "스틸라",
    color: "gray",
  },
  {
    title: "Cellapy",
    name: "셀라피",
    color: "purple",
  },
  {
    title: "LAPOTICELL",
    name: "라포티셀",
    color: "brown",
  },
];

export default function Brand() {
  return (
    <Container>
      <h1>브랜드관</h1>
      <h3>PURE SHOP의 다양한 브랜드를 만나보세요</h3>
      <BoxContainer>
        {list.map((item, index) => (
          <Box key={index}>
            <BoxImage color={item.color}>{item.title}</BoxImage>
            <div>{item.name}</div>
          </Box>
        ))}
      </BoxContainer>
    </Container>
  );
}

const BoxImage = styled.div`
  width: 160px;
  height: 160px;
  background: ${(props) => props.color};
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;

  & > h1,
  h3 {
    text-align: center;
    margin-top: 20px;
  }

  & > h3 {
    font-weight: 400;
    color: #aeaeae;
    margin-top: 10px;
  }
`;
