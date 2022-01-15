import styled from "styled-components";

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
`;
