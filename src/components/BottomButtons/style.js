import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

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
    height: 30px;
    width: 100%;
    border: 0;
    padding: 0;
    border-radius: 8px;
    background: rgba(45, 225, 252, 0.5);

    &:hover {
      background-color: rgb(45, 225, 252);
      border: 2px solid rgba(45, 225, 252, 0.5);
    }
  }
`;
