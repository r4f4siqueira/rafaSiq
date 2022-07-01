import styled from "styled-components";

export const Container = styled.div`
    background-color: transparent;
    margin: 0 auto;
    padding: 0;
    width: 100vw;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    //box-shadow: 0 0 1vw #81f7f3;

    a {
        text-decoration: none;
    }

    .home,
    .projetos,
    .links {
        //margin-top: -1vh;
        margin-left: 0.25vw;
        margin-right: 0.25vw;
        display: inline-block;
        padding: 2vh 5vw;
        min-height: 2vh;
        min-width: 5vw;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        background-color: #002e74;
        border: solid 2px;
        border-radius: 15px;
        box-shadow: 0 9px #999;
    }

    .home:hover,
    .projetos:hover,
    .links:hover {
        background-color: #ddb447;
    }

    .home:active,
    .projetos:active,
    .links:active {
        background-color: #345990;
        box-shadow: 0 5px #666;
        transform: translateY(6px);
        border: solid 2px;
    }

    .true {
        background-color: #ffb701;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
        border: solid 2px;
        transition: all 0.2s;
    }
`;
//vw
//vh
