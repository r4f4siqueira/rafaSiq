import { Botao } from "../ToggleSwitch/style";
import React, { useState } from "react";

function ToggleSwitch() {
    //Instanciando o estado do tema
    const [darkmode, setDarkmode] = useState(false);

    //pegar o tema salvo
    console.log("antes de salvar o tema: " + localStorage.getItem("tema"));

    //setDarkmode(salvo);

    function mudaTema() {
        //   alert("mudarTema() entrou: " + darkmode);
        setDarkmode(darkmode === false ? true : false);
    }

    //salva o tema
    localStorage.setItem("tema", JSON.stringify(darkmode));
    console.log("Depois: " + localStorage.getItem("tema"));
    return (
        <>
            <Botao>
                <input onClick={() => mudaTema()} type="checkbox" />
                <span className="slider"></span>
            </Botao>
        </>
    );
}

export default ToggleSwitch;
