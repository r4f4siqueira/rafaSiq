import { Box, CircularProgress, Heading, Link, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
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
        return (
            <Box
                display="flex"
                flexDir="column"
                alignItems={'center'}
                justifyContent="center"
            >
                <CircularProgress
                    isIndeterminate
                    size={'30%'}
                    color="blackAlpha.900"
                />
            </Box>
        );
    }

    return (
        <Box>
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
                            <Box
                                key={repositorio.id}
                                marginTop={['8px', '8px', '16px', '32px']}
                            >
                                <Heading
                                    color="#FFFA5F"
                                    as={'h1'}
                                >
                                    {repositorio.name}
                                </Heading>
                                <Box color="#759eff">
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
                            </Box>
                        ) : null;
                    })}
                </Box>
            </Box>
        </Box>
    );
}
export default Projetos;
