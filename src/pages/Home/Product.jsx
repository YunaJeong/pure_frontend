import styled from "styled-components";

export default function Product({ item }) {
  return (
    <Container>
      <img src={item.img} alt={item.title} />
      <Company>{item.company}</Company>
      <Title>{item.title}</Title>
      <Tags>
        {item.tags.map(({ name, color }) => (
          <div key={name} style={{ background: color }}>
            {name}
          </div>
        ))}
      </Tags>
    </Container>
  );
}

const Company = styled.h3`
  margin-top: 10px;
`;

const Title = styled.div`
  width: 95%;
  text-align: center;
  margin: 10px 0;
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    color: white;
    border-radius: 0.5rem;
    padding: 2px 5px;
    margin: 0 3px;
  }
`;

const Container = styled.div`
  & > img {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;
