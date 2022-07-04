import styled from "styled-components";

export const Rodape = styled.div`
    .infos {
        margin-top: 64px;
        margin-left: 100px;
        margin-right: 100px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (max-width: 1000px) {
        .infos {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }
`;
//vw
//vh
