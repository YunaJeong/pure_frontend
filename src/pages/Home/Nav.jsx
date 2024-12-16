import styled from "styled-components";

const menus = [
  "쿠폰/이벤트",
  "신규회원 혜택",
  "랭킹",
  "공식몰 단독",
  "신상",
  "맞춤 추천",
];

export default function Nav() {
  return (
    <Container>
      {menus.map((menu, index) => (
        <span key={index} style={{ width: 100 / menus.length + "%" }}>
          {menu}
        </span>
      ))}
    </Container>
  );
}

const Container = styled.nav`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  border-bottom: 1px solid #dedede;

  & > span {
    height: 50%;
    cursor: pointer;
    font-weight: 600;

    border-left: 1px solid #a4a4a4;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:last-of-type {
      border-right: 1px solid #a4a4a4;
    }
  }
`;
