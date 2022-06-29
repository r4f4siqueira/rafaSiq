import styled from "styled-components";

export const Botao = styled.label`
    /* The switch - the box around the slider */
    position: relative;
    display: inline-block;
    width: 50px;
    height: 32px;
    border-radius: 100%;

    /* Hide default HTML checkbox */
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        border-radius: 15px;
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f1e05a;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        border-radius: 100%;
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        margin-bottom: 4px;
    }

    input:checked + .slider {
        background-color: #0d1017;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #0d1017;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;
