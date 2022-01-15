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
  min-height: 558.5px;

  .title {
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    padding: 10px;
    text-align: center;
  }
  .item {
    position: relative;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;

    .item-column {
      cursor: pointer;
      padding: 6.5px 12px;
      width: 100%;
      height: 100%;
    }
  }
  .item:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  .search-results {
    height: 430.5px;
  }
  .search-results-title {
    padding-left: 8px;
  }
  .search-results-failed {
    height: 419.5px;

    .item {
      cursor: auto;
      &:hover {
        background: #ebe9e9;
      }
    }
  }

  .loading {
    height: 430.5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img {
    animation: ${rotate} 2s linear infinite;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;
