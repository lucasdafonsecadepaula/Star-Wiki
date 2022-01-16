import styled, { keyframes } from "styled-components";

const moveLeftAndRight = keyframes`
  0% {
    transform: translateX(0px);
  }
  50%{
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const blink = keyframes`
  0% {
    opacity: .6;
  }
  100% {
    opacity: 1;
  }
`;

export const Body = styled.div`
  z-index: 0;
  position: relative;
  top: ${({ value }) => `${value.yPosition}px`};
  left: ${({ value }) => `${value.xPosition}px`};
  height: 4px;
  width: 4px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
  background: #ffff;
  animation: ${moveLeftAndRight} 2s infinite linear,
    ${blink} 1s infinite ease-in-out;
  animation-delay: ${() => `${Math.floor(Math.random() * 1000)}ms`};
`;
