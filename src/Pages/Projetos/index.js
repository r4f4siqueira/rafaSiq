import React, { useState, useEffect } from "react";
import apiGithub from "../../services/github";
import { Container } from "./style";
import Footer from "../../Components/Footer";

function Projetos() {
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const [repositorioData] = await Promise.all([apiGithub.get(`/repos?sort=updated&direction=desc`)]);
            setRepositorios(repositorioData.data);
            setLoading(false);
        }
        load();
    }, []);

    if (loading) {
        return <h1>Cerregando . . . </h1>;
    }

    return (
        <>
            <Container>
                {repositorios.map((repositorio) => {
                    return !repositorio.fork?
                        <div key={repositorio.id} className="repositorios">
                            <h1>{repositorio.name}</h1>
                            <h2>{repositorio.description}</h2>
                            <br></br>
                            <span>
                                Ver no gitHub{" "}
                                <a href={repositorio.html_url} target="blank">
                                    {repositorio.html_url}
                                </a>
                            </span>
                            <br></br>
                            <span>Git Clone: {repositorio.clone_url}</span>
                            <span>Default branch: {repositorio.default_branch}</span>
                            <br></br>
                            <span>Linguagem: {repositorio.language}</span>
                        </div>
                        :
                        null
                })}
            </Container>
            <Footer></Footer>
        </>
    );
}
export default Projetos;
