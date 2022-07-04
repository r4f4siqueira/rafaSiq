import styled from "styled-components";

export const Container = styled.div`
    width: 80vw;
    margin: auto;
    margin-top: 5vh;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 40px 10px;
    box-shadow: 0 0 25px #fff;

    .btlinks {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        margin-bottom: 20px;
        text-decoration: none;
        margin-left: 5px;
        margin-right: 5px;
        background-color: #fff;
        border-radius: 8px;
        background-color: #012363;
        border: solid 1px #fff;
        transition: all 0.3s;
        //box-shadow: inset 0 0 10px #fff;

        .imglinks {
            display: flex;
            align-items: flex-end;
            flex-direction: column;

            justify-content: center;
            width: 80vw;
            height: 10vh;

            img {
                max-width: 50px;
                max-height: 50px;
            }
        }

        .spanlinks {
            width: 80vw;
            height: 10vh;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            margin-left: 30px;
            margin-right: 15%;
        }
    }

    .btlinks:hover {
        div {
            cursor: pointer;
        }
        box-shadow: inset 0 0 25px #ffb701, 0 0 50px #ffb701;
        border: solid 1px #ffb701;
        color: #ffb701;
        outline: 2px solid #ffb701;
        outline-offset: -3px;
        margin-left: 16px;
        margin-right: 16px;
        cursor: pointer;
        span {
            color: #ffb701;
            font-style: italic;
            cursor: pointer;
        }
        img {
            cursor: pointer;
        }
    }

    @media screen and (max-width: 1000px) {
        img {
            width: 32px;
            height: 32px;
        }
    }
`;
