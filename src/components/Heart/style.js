import styled, { keyframes } from "styled-components";

const pulse = keyframes`
0%
  {
    transform: scale( 1 );
  }
  20%
  {
    transform: scale( 1.08 );
  }
  40%
  {
    transform: scale( 1 );
  }
  60%
  {
    transform: scale( 1.08 );
  }
  80%
  {
    transform: scale( 1 );
  }
  100%
  {
    transform: scale( 1 );
  }
`;

export const Body = styled.div`
  svg {
    height: 20px;
    width: 20px;
    fill: none;
    stroke: black;
    stroke-width: 16px;

    &:hover {
      animation: ${pulse} 1s infinite;
    }
  }
  ${({ props }) =>
    props.favoritePerson[props.person] &&
    `
svg {
    fill: red;
  }
`}
`;
