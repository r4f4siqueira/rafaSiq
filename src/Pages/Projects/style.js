import styled from 'styled-components';

export const Container = styled.div`
    margin: 50px auto;
    width: 60vw;
    border: solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: 8px solid #ffb701;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 40px 16px;
    color: #ffb701;
    h1 {
        color: #ffb701;
        filter: drop-shadow(2px 2px 0px #161716);
    }
    h2 {
        color: #fff;
    }
    a {
        padding: 2px;
        color: #ffb701;
        filter: drop-shadow(1px 1px 0px #161716);
        transition: all 0.1s;
    }
    a:hover {
        color: #fff;
        cursor: pointer;
        filter: none;
        background-color: rgba(1, 35, 99, 0.2);
        border-radius: 4px;
        box-shadow: 0 0 5px #fff;
    }
    span {
        color: #fff;
    }

    .repositorios {
        margin-top: 36px;
        margin-bottom: 36px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        //border-bottom: solid red;
        width: 40vw;
    }

    @media screen and (max-width: 1000px) {
        margin: 10px auto;
        width: 80vw;
        align-items: flex-start;
        font-size: 15px;
        .repositorios {
            //border-bottom: sol
            width: 40vw;
            margin-left: 20px;
            margin-right: 20px;
            h2 {
                width: 75vw;
                font-size: 15px;
            }
            span {
                font-size: 12px;
            }
        }
    }
`;
