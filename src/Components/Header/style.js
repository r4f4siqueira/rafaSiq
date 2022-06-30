import styled from "styled-components";

export const Container = styled.div`
    background-color: aqua;
    margin: 0 auto;
    padding: 0;
    width: 100vw;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 1vw #81f7f3;

    a {
        text-decoration: none;
    }

    .home,
    .projetos,
    .links {
        margin-top: -1vh;
        margin-left: 1vh;
        margin-right: 1vh;
        display: inline-block;
        padding: 2vh 5vw;
        min-height: 2vh;
        min-width: 5vw;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        background-color: #0c2635;
        border: solid 2px;
        border-radius: 15px;
        box-shadow: 0 9px #999;
    }

    .home:hover,
    .projetos:hover,
    .links:hover {
        background-color: #2e64fe;
    }

    .home:active,
    .projetos:active,
    .links:active {
        background-color: #2e64fe;
        box-shadow: 0 5px #666;
        transform: translateY(6px);
        border: solid 2px;
    }

    .true {
        background-color: #2e64fe;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
        border: solid 2px;
    }
`;
//vw
//vh
