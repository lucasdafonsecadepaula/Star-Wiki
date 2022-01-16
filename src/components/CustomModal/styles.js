import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 100px;

  .close-button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;
    cursor: pointer;
    background-color: #222;
    color: #eaeaea;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: absolute;
    right: 2px;
    top: 2px;
    font-size: 20px;
    line-height: 5px;
  }

  .item {
    padding: 10px 0;
  }

  @media screen and (max-width: 414px) {
    padding: 25px;
  }
`;
