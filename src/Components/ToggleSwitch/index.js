import { Botao } from "../ToggleSwitch/style";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ToggleSwitch() {
    //let { idTema } = useParams();
    //Instanciando o estado do tema
    const [darkmode, setDarkmode] = useState(false);

    //pegar o tema salvo
    //localStorage.getItem("tema");
    //console.log("Tema: " + idTema.idTema);

    //setDarkmode(salvo);

    function mudaTema() {
        //   alert("mudarTema() entrou: " + darkmode);
        setDarkmode(darkmode === false ? true : false);
        // Usamos essa propriedade para acessar
        // a variável vinda pela URL!
    }

    //salva o tema

    localStorage.setItem("tema", JSON.stringify(darkmode));
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
