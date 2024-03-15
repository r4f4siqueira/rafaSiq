import { Link } from 'react-router-dom';
import { Container } from './style';
// import ToggleSwitch from "../ToggleSwitch";
import React, { useState } from 'react';

function Header() {
    const [botoes, setBotoes] = useState([
        { id: 2, nome: 'links', label: 'LINKS', ativo: true, link: '' },
        {
            id: 3,
            nome: 'projects',
            label: 'PROJECTS',
            ativo: false,
            link: 'projects',
        },
        {
            id: 4,
            nome: 'credits',
            label: 'CREDITS',
            ativo: false,
            link: 'credits',
        },
    ]);

    function ativo(index) {
        /* Gilberto que fez:
        const btativo = botoes.find((element) => element.ativo === true);
        // eslint-disable-next-line
        if (btativo.id != index) {
            btativo.ativo = false;
            const btclick = botoes.find((element) => element.id === index);
            btclick.ativo = true;
            // eslint-disable-next-line
            const btfodasse = botoes.find((element) => element.id != index && element.id != btativo.id);
            console.log(btativo);
            console.log(btclick);
            console.log(btfodasse);

            const botoesv = [btativo, btclick, btfodasse];

            const bthome = botoesv.find((element) => {
                return element.id === 1;
            });
            const btproj = botoesv.find((element) => {
                return element.id === 2;
            });
            const btlink = botoesv.find((element) => {
                return element.id === 3;
            });

            setBotoes([bthome, btproj, btlink]);
        } else {
        }
*/

        //console.log("antes de alterar: " + botoes[index - 1].ativo);
        //Buscando elemento ativo
        //console.log("ANTES DE ALTERAR ativo id: " + bt.id + "ativo.ativo: " + bt.ativo);
        //alterando dados dos botoes

        switch (index) {
            case 1:
                setBotoes([
                    { id: 2, nome: 'links', label: 'LINKS', ativo: true, link: '' },
                    {
                        id: 3,
                        nome: 'projects',
                        label: 'PROJECTS',
                        ativo: false,
                        link: 'projects',
                    },
                    {
                        id: 4,
                        nome: 'credits',
                        label: 'CREDITS',
                        ativo: false,
                        link: 'credits',
                    },
                ]);
                break;
            case 2:
                setBotoes([
                    { id: 2, nome: 'links', label: 'LINKS', ativo: true, link: '' },
                    {
                        id: 3,
                        nome: 'projects',
                        label: 'PROJECTS',
                        ativo: false,
                        link: 'projects',
                    },
                    {
                        id: 4,
                        nome: 'credits',
                        label: 'CREDITS',
                        ativo: false,
                        link: 'credits',
                    },
                ]);
                break;
            case 3:
                setBotoes([
                    { id: 2, nome: 'links', label: 'LINKS', ativo: false, link: '' },
                    {
                        id: 3,
                        nome: 'projects',
                        label: 'PROJECTS',
                        ativo: true,
                        link: 'projects',
                    },
                    {
                        id: 4,
                        nome: 'credits',
                        label: 'CREDITS',
                        ativo: false,
                        link: 'credits',
                    },
                ]);
                break;
            case 4:
                setBotoes([
                    { id: 2, nome: 'links', label: 'LINKS', ativo: false, link: '' },
                    {
                        id: 3,
                        nome: 'projects',
                        label: 'PROJECTS',
                        ativo: false,
                        link: 'projects',
                    },
                    {
                        id: 4,
                        nome: 'credits',
                        label: 'CREDITS',
                        ativo: true,
                        link: 'credits',
                    },
                ]);
                break;

            default:
                console.log('sem opc');
                break;
        }
        //console.log("Depois de alterar: " + botoes[index - 1].ativo);
        //console.log("ATIVO ALTERADO ex ativo id: " + bt.id + "ativo.ativo: " + bt.ativo);
        //console.log(botoes);
    }
    return (
        <Container className="links">
            <div>
                {botoes.map((botao) => (
                    <Link
                        key={botao.id}
                        className={botao.nome + ' ' + botao.ativo}
                        to={`/${botao.link}`}
                        active={botao.active}
                        onClick={() => ativo(botao.id)}
                    >
                        {botao.label}
                    </Link>
                ))}
            </div>
        </Container>
    );
}
export default Header;
