import styled from "styled-components";

export const Container = styled.div`
    width: 80vw;
    margin: auto;
    margin-top: 5vh;
    border: solid red;
    background-color: #345990;
    border-radius: 40px 10px 40px 10px;

    .btlinks {
        display: flex;
        align-items: center;
        flex-direction: row;
        border: solid red;
        margin-top: 20px;
        margin-bottom: 20px;

        .imglinks {
            display: flex;
            align-items: center;
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
            align-items: center;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
    }

    .btlinks:hover {
        background-color: aliceblue;
    }
`;
