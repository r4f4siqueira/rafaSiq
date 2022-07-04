import styled from "styled-components";
import fundo from "../../assets/SL-043021-42650-28.jpg";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    //background-image: url(${fundo}) !important;
    //background-color: #fff;
    //border: solid red;

    .divImagem {
        width: 50vh;
        height: 50vh;
        margin-top: 20vh;
        margin-left: 1vw;
        margin-right: 2vw;
        display: flex;
        align-items: center;
        justify-content: center;

        .imagem {
            width: 100%;
            height: 100%;
            border-radius: 16px;
            box-shadow: 0 0 25px #fff;
        }
    }

    .area-texto {
        border: 1px solid #ffffff63;
        margin-top: 20vh;
        margin-left: 1vw;
        margin-right: 2vw;
        border-radius: 8px;
        padding: 20px;
        background-color: #ffffff34;
        font-size: large;
        backdrop-filter: blur(3px);
        width: 80vh;
        height: 50vh;
        text-align: justify;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 25px #fff;
        //justify-content: center;
        //align-items: center;

        .titulo {
            h1 {
                color: #feb705;
            }
        }

        .texto {
            margin-top: 10vh;
        }

        a {
            color: #feb705;
            transition: all 0.4s;
        }
        a:hover {
            color: #012363;
            cursor: pointer;
            border-radius: 4px;
            box-shadow: inset 0 0 10px #012363;
        }
    }
    @media screen and (max-width: 1000px) {
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .divImagem {
            margin-top: 2vh;
            width: 80vw;
            height: 80vw;
        }

        .area-texto {
            margin-top: 2vh;
            margin-left: 2vw;
            margin-right: 2vw;
            border: 1px solid #ffffff63;
            width: 80vw;
            height: 56vh;
            backdrop-filter: unset;

            .texto {
                margin-top: 5vh;
            }
        }
        @media screen and (max-height: 500px) {
            margin-top: 2vh;
            .divImagem {
                width: 50vw;
                height: 50vw;
            }

            .area-texto {
                height: 85vh;
            }
        }
    }
`;
//vw
//vh
