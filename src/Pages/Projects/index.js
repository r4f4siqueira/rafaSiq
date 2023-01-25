import { useEffect, useState } from 'react';
import apiGithub from '../../services/github';

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

    console.log(repositorios[0].id);

    return (
        <>
            <h1>Projetos</h1>
        </>
    );
}
export default Projetos;
