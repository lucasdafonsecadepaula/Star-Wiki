import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    scroll-behavior: smooth;
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
body {
    min-height: 100vh;
    font-family: sans-serif;
    background: #111;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

`;