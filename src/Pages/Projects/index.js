import { Badge, Box, Code, Heading, Link, Text } from '@chakra-ui/react';
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

    return (
        <Box>
            <Header />
            <Box
                display={'flex'}
                flexDirection="column"
                alignItems={'center'}
            >
                <Box
                    padding={'8px'}
                    w={['98%', '90%', '85%', '70%']}
                    margin="5px 5px 0px 5px"
                    border={'solid 1px #ecc94b'}
                >
                    {repositorios.map((repositorio) => {
                        return !repositorio.fork ? (
                            <Box key={repositorio.id}>
                                <Heading as={'h1'}>{repositorio.name}</Heading>
                                <Heading as={'h2'}>{repositorio.description}</Heading>
                                <Text>
                                    Ver no gitHub:{' '}
                                    <Link
                                        href={repositorio.html_url}
                                        isExternal
                                    >
                                        {repositorio.html_url}
                                    </Link>
                                </Text>
                            </Box>
                        ) : null;
                    })}
                </Box>
            </Box>
        </Box>
    );
}
export default Projetos;
