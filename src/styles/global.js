import { createGlobalStyle } from "styled-components";

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
            background: #0d2636;
            font-size: 14px;
            -webkit-font-smoothing: antialiased !important;
        }
    
        body, imput, button{
            color: #222;
            font-size: 14px;
            font-family: Arial, Halvetica, sans-serif;
        }
    }`;
