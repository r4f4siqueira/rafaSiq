import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import apiGithub from '../../Services/github';

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
        <Box>
            <Header />
        </Box>
    );
}
export default Projetos;
