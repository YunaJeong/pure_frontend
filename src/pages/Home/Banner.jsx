import { useState } from "react";
import styled from "styled-components";

const url = [
  "./banner1.jpg",
  "./banner2.jpg",
  "./banner3.jpg",
  "./banner4.jpg",
];

export default function Banner() {
  return (
    <Container>
      <Wrapper>
        {url.map((item, index) => (
          <ImageContainer key={index} url={item} />
        ))}
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  width: calc(1920px * 4);
  height: 100%;
  animation: slide 28s ease-in-out infinite;
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-1920px);
    }
    45% {
      transform: translateX(-1920px);
    }
    50% {
      transform: translateX(-3840px);
    }
    70% {
      transform: translateX(-3840px);
    }
    75% {
      transform: translateX(-5760px);
    }
    95% {
      transform: translateX(-5760px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const ImageContainer = styled.div`
  display: inline-block;
  width: 1920px;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;

const Container = styled.div`
  width: 100vw;
  height: 650px;
  background-image: url("./banner1.jpg");
  background-size: 100% 100%;
  background-position: center center;
`;
