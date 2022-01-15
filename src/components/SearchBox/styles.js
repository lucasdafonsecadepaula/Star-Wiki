import styled, { keyframes } from "styled-components";

const border = keyframes`
  0% {
    border-color: rgba(45, 225, 252,0.1);
  }
  50%{
    border-color: rgb(45, 225, 252);
  }
  100% {
    border-color: rgba(45, 225, 252,0.1);
  }
`;

const move = keyframes`
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
`;

const blink = keyframes`
  0% {
    opacity: .2;
  }
  100% {
    opacity: 1;
  }
`;

export const Body = styled.div`
  .input {
    text-transform: lowercase;
    margin-top: 8px;
    width: 100%;
    height: 50px;
    border: 2px solid rgba(45, 225, 252, 0.3);
    font-family: "Jedi2";
    font-size: 18px;
    padding-left: 8px;

    &:focus {
      outline: none;
      animation: ${border} 2s infinite ease-in-out;
    }
  }

  input:focus + .dot {
    opacity: 0;
    animation: none;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgb(45, 225, 252);
    offset-path: path(
      "m 0 -4.9 l 0 -39.2 c 0 -4.9 0 -4.9 20.2 -4.9 l 362.4 0 c 20.2 0 20.2 0 20.2 4.9 l 0 39.2 c 0 4.9 0 4.9 -20.2 4.9 l -362.4 0 c -20.2 0 -20.2 0 -20.2 -4.9"
    );
    animation: ${move} 5s infinite ease-in-out, ${blink} 1s infinite ease-in-out;
  }

  @media screen and (max-width: 414px) {
    .dot {
      offset-path: path(
        "m 0 -4.9 l 0 -39.2 c 0 -4.9 0 -4.9 15.1 -4.9 l 271.8 0 c 15.1 0 15.1 0 15.1 4.9 l 0 39.2 c 0 4.9 0 4.9 -15.1 4.9 l -271.8 0 c -15.1 0 -15.1 0 -15.1 -4.9"
      );
    }
  }

  .divider {
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  }
`;
