import { createGlobalStyle } from 'styled-components';
import fundo from '../Assets/SL-043021-42650-28.jpg';

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
            background-position: unset;
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
            ::-webkit-scrollbar{
                width: 3px;
            }
            ::-webkit-scrollbar-track {
            background-color: #feb705;
            box-shadow:0 0 50px #ffb701;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #012363;
            }
        }
        
        body, input, button{
            color: #222;
            font-size: 14px;
            font-family: Arial, Halvetica, sans-serif;
        }
    }
    *::selection{
        background-color: #238636;
    }
    
    
`;
