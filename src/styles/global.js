import { createGlobalStyle } from "styled-components";
import fundo from "../assets/SL-043021-42650-28.jpg";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        cursor: default;
        //background-color: #0d2636;
        color: #f1f6fc;

        html,body,#root{
            min-height: 100%;
        }
    
        body{
            background-attachment: fixed;
            background-image: url(${fundo});
            background-position: center;
	        background-size: cover;
            //height: 100vh;
            //width: 100vw;
            //background-repeat: no-repeat;
            //background: #0d2636;
            font-size: 14px;
            -webkit-font-smoothing: antialiased !important;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
        }
    
        body, input, button{
            color: #222;
            font-size: 14px;
            font-family: Arial, Halvetica, sans-serif;
        }
    }`;
