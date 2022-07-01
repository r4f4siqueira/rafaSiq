import React, { useState, useEffect } from "react";
import apiGithub from "../../services/github";

function Projetos() {
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const [repositorioData] = await Promise.all([apiGithub.get(`/repos`)]);
            setRepositorios(repositorioData.data);
            setLoading(false);
        }
        load();
    }, []);

    if (loading) {
        return <h1>Cerregando . . . </h1>;
    }
    console.log(repositorios);

    return (
        <div>
            <ul>
                {repositorios.map((repositorio) => (
                    <li key={repositorio.id}>
                        <h1>{repositorio.name}</h1>
                        <h2>{repositorio.description}</h2>
                        <p>Git Clone: {repositorio.clone_url}</p>
                        <span>{repositorio.language}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Projetos;
