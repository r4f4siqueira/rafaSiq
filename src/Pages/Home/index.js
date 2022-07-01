import React, { useState, useEffect } from "react";
import apiGithub from "../../services/github";
import { Container } from "./style";
import imgPerfil from "../../assets/imagesmode_FILL0_wght400_GRAD0_opsz48.svg";
import Footer from "../../Components/Footer";

function Home() {
    const [perfilGithub, setPerfilGithub] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const [repositorioData] = await Promise.all([apiGithub.get(``)]);
            setPerfilGithub(repositorioData.data);
            setLoading(false);
        }
        load();
    }, []);

    if (loading) {
        return <h1>Cerregando . . . </h1>;
    }
    //<img src={perfilGithub.avatar_url}></img>
    return (
        <>
            <Container>
                <div className="divImagem">
                    <img className="imagem" src={imgPerfil}></img>
                </div>
                <div className="area-texto">
                    <div className="titulo">
                        <h1>{perfilGithub.name}</h1>
                    </div>
                    <div className="texto">
                        <p>👀 Interessado em aprender e ser desafiado </p>
                        <br />
                        <p>🌱 Estudando engenharia de software</p>
                        <br />
                        <p>
                            💻 Trabalho como desenvolvedor Jr na faculdade em que estudo{" "}
                            <a href="https://www.unigran.br/" target="blank">
                                "UNIGRAN"
                            </a>
                        </p>
                        <br />
                        <p>😄 No botão links você encontra várias formas de entrar em contato comigo!</p>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}
export default Home;
