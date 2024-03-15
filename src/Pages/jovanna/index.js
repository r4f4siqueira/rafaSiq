import React from 'react';
import './jovanna.css';
import foto from '../../Assets/378431022_835911038040375_2012950259398085023_n.jpg';
function Jovanna() {
    return (
        <div className="tem">
            <div>
                <h1>Amo você senhora Siqueira</h1>
                <p>Como não sei escrever então fiz esse negócio aki, espero que goste 😊</p>
                <p>Tem algumas imagens de nós e uma coisas que talvez desbloqueie um pouco sua memoria</p>
            </div>
            <div className="foto1">
                <h2>Imagem do nosso pre eding</h2>
                <img
                    src={foto}
                    alt="Girl in a jacket"
                    width="500"
                    height="600"
                ></img>
            </div>
        </div>
    );
}
export default Jovanna;
