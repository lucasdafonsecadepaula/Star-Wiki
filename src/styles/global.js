import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    scroll-behavior: smooth;
    margin: 0;
    padding:0;
    box-sizing: border-box;
    text-transform: lowercase;
}
body {
    min-height: 100vh;
    font-family: "Jedi2";
    background: #111;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal-overlay{
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(255,255,255,0.3);	
}
.modal-content{
    position: relative;
    box-shadow: 2px 5px rgba(0,0,0, 0.3);
    border: 1px solid;
    border-radius: 10px;
    background: #ebe9e9;
    outline: none;
}
.ReactModal__Body--open,
.ReactModal__Html--open {
  overflow: hidden;
  .btn-left, .btn-right{
         display: none;
  }
}
.ReactModal__Content {
    opacity: 0;
    transform: scale(0.9);
    transition: all 300ms ease-in-out;
}
.ReactModal__Content--after-open{
    opacity: 1;
    transform: scale(1);
}
.ReactModal__Overlay {
    transform: scale(1);
    transition: all 300ms ease-in-out;
}
.ReactModal__Overlay--before-close{
    transform: scale(0.9);
}
`;
