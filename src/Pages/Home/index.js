import React, { useState, useEffect } from "react";
import apiGithub from "../../services/github";
import { Container } from "./style";

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
    console.log(perfilGithub);
    return (
        <Container>
            <h1>Home</h1>
            <img src={perfilGithub.avatar_url}></img>
            <p>Rafael</p>
        </Container>
    );
}
export default Home;
