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
                    <li key={repositorio.id}>{repositorio.id}</li>
                ))}
            </ul>
        </div>
    );
}
export default Projetos;
