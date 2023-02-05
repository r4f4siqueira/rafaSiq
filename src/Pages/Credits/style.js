import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 25px #fff;

    width: 80vw;
    height: 20vh;
    margin: auto;
    margin-top: 5vh;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.5);
    border-radius: 40px 10px;

    .linkCreditos {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        width: 60vw;
        //border-left: solid #012363;
        border-bottom: solid #012363;
        transition: all 0.2s;
    }
    a {
        color: #012363;
        transition: all 0.2s;
        font-size: 16px;
    }
    a:hover {
        filter: drop-shadow(1px 1px 0px #161716);
        color: #ffb701;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px) {
        width: 80vw;
        height: 45vh;
    }
`;
//vw
//vh
