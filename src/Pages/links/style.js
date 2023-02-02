import styled from 'styled-components';

export const ContainerPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;

    .img-perfil {
        width: 128px;
        height: 128px;
        border-radius: 100%;
    }

    .div-description {
        width: 82vw;
        margin: 4px;
        display: flex;
        justify-content: center;
    }

    @media screen and (min-width: 820px) {
        .span-description {
            width: 50vw;
        }
    }
`;

export const Container = styled.div`
    width: 50vw;
    margin: auto;
    margin-top: 24px;
    border: 1px solid rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.8);
    border-radius: 40px 10px;
    box-shadow: 0 0 25px #fff;
    padding: 10px;

    .btlinks {
        display: flex;
        flex-direction: row;
        text-decoration: none;

        background-color: #fff;
        border-radius: 8px;
        background-color: #012363;
        border: solid 1px #fff;
        transition: all 0.3s;
        margin-top: 5px;
        margin-bottom: 5px;

        //box-shadow: inset 0 0 10px #fff;

        .imglinks {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            width: 45vw;
            height: 40px;
            margin-right: 15px;

            img {
                max-width: 24px;
                max-height: 24px;
            }
        }

        .spanlinks {
            width: 50vw;
            height: 40px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
        }
    }

    @media screen and (max-width: 820px) {
        width: 80vw;
        .imglinks {
            width: 20vw !important;
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
`;
