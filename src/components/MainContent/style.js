import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Body = styled.div`
  background-color: red;
  width: 400px;
  background-color: #ebe9e9;
  font-family: "Jedi2";
  border-radius: 8px;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.6);

  .title {
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    padding: 10px;
    text-align: center;
  }
  .item {
    cursor: pointer;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 6px 6px 6px 12px;
  }
  .item:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  .loading {
    height: 424px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .bottom-btn {
    width: 100%;
  }

  .bottom-text {
    width: 30%;
    text-align: center;
  }

  .bottom-btn-left {
    ${({ pagination }) => pagination === 1 && `display: none;`}
  }
  .bottom-btn-right {
    ${({ pagination }) => pagination === 9 && `display: none;`}
  }

  button {
    cursor: pointer;
    height: 28px;
    width: 100%;
    border: 0;
    padding: 0;
    border-radius: 8px;
    background: rgba(45, 225, 252,0.5);

    &:hover {
      background-color: rgb(45, 225, 252);
      border: 2px solid rgba(45, 225, 252,0.5);
    }
  }
`;
