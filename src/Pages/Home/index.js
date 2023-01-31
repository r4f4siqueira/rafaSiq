import gitHubImg from '../../Assets/GitHub-Mark-Light-120px-plus.png';
import instaImg from '../../Assets/Instagram.png';
import faceImg from '../../Assets/facebook.png';
import linkedinImg from '../../Assets/linkedin.png';
import gmailImg from '../../Assets/google_mail_gmail.png';
import { useEffect, useState } from 'react';
import apiGithub from '../../Services/github';
import { Box, Card, CardBody, CircularProgress, Heading, Image, Link, Text } from '@chakra-ui/react';

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
        <Box
            display="flex"
            flexDir="column"
            alignItems={'center'}
            justifyContent="center"
            paddingTop={['2', '8', '16', '16']}
        >
            <Card
                background={'blackAlpha.400'}
                w={['98%', '90%', '85%', '70%']}
                alignItems={'center'}
            >
                <CardBody
                    display="flex"
                    flexDir="column"
                    alignItems={'center'}
                >
                    <Image
                        src={perfilGithub.avatar_url}
                        alt="Profile Picture gitHub"
                        borderRadius="50%"
                        maxW={'200px'}
                        minW={'200px'}
                    />
                    <Heading>Rafael Siqueira</Heading>
                    <Box>
                        <Text>
                            Junior Full Stack Developer at UNIGAN, the university where I graduated in Software
                            Engineering;
                        </Text>
                        <Text>I live in Dourados - MS Brazil, passionate about technology and extremely curious;</Text>
                        <Text>Below my social media:</Text>
                    </Box>
                    <Box>
                        <Link
                            href="https://github.com/r4f4siqueira"
                            _hover={{}}
                            isExternal
                        >
                            <Box
                                marginTop={'20px'}
                                display={'flex'}
                                flexDir={'row'}
                                justifyContent="center"
                                alignItems="center"
                                background={'blackAlpha.500'}
                                border={'solid 1px'}
                                borderRadius="4px"
                                borderColor="white"
                                minH={'36px'}
                                w={['88vw', '68vw', '68vw', '68vw']}
                                transition="0.3s"
                                _hover={{
                                    width: '66vw',
                                }}
                            >
                                <Image
                                    maxH={'32px'}
                                    src={gitHubImg}
                                />
                                <Text marginLeft={'8px'}>r4f4siqueira</Text>
                            </Box>
                        </Link>

                        <Link
                            href="https://github.com/r4f4siqueira"
                            _hover={{}}
                            isExternal
                        >
                            <Box
                                marginTop={'20px'}
                                display={'flex'}
                                flexDir={'row'}
                                justifyContent="center"
                                alignItems="center"
                                background={'blackAlpha.500'}
                                border={'solid 1px'}
                                borderRadius="4px"
                                borderColor="#E75DFC"
                                minH={'36px'}
                                w={['88vw', '68vw', '68vw', '68vw']}
                                transition="0.3s"
                                _hover={{
                                    width: '66vw',
                                }}
                            >
                                <Image
                                    maxH={'32px'}
                                    src={instaImg}
                                />
                                <Text marginLeft={'8px'}>@r4f4siqueira</Text>
                            </Box>
                        </Link>

                        <Link
                            href="https://github.com/r4f4siqueira"
                            _hover={{}}
                            isExternal
                        >
                            <Box
                                marginTop={'20px'}
                                display={'flex'}
                                flexDir={'row'}
                                justifyContent="center"
                                alignItems="center"
                                background={'blackAlpha.500'}
                                border={'solid 1px'}
                                borderRadius="4px"
                                borderColor="#257CCF"
                                minH={'36px'}
                                w={['88vw', '68vw', '68vw', '68vw']}
                                transition="0.3s"
                                _hover={{
                                    width: '66vw',
                                }}
                            >
                                <Image
                                    maxH={'32px'}
                                    src={faceImg}
                                />
                                <Text marginLeft={'8px'}>Rafael Siqueira</Text>
                            </Box>
                        </Link>

                        <Link
                            href="https://github.com/r4f4siqueira"
                            _hover={{}}
                            isExternal
                        >
                            <Box
                                marginTop={'20px'}
                                display={'flex'}
                                flexDir={'row'}
                                justifyContent="center"
                                alignItems="center"
                                background={'blackAlpha.500'}
                                border={'solid 1px'}
                                borderRadius="4px"
                                borderColor="#169CC7"
                                minH={'36px'}
                                w={['88vw', '68vw', '68vw', '68vw']}
                                transition="0.3s"
                                _hover={{
                                    width: '66vw',
                                }}
                            >
                                <Image
                                    maxH={'32px'}
                                    src={linkedinImg}
                                />
                                <Text marginLeft={'8px'}>Rafael Siqueira</Text>
                            </Box>
                        </Link>

                        <Link
                            href="https://github.com/r4f4siqueira"
                            _hover={{}}
                            isExternal
                        >
                            <Box
                                marginTop={'20px'}
                                display={'flex'}
                                flexDir={'row'}
                                justifyContent="center"
                                alignItems="center"
                                background={'blackAlpha.500'}
                                border={'solid 1px'}
                                borderRadius="4px"
                                borderColor="#2D902F"
                                minH={'36px'}
                                w={['88vw', '68vw', '68vw', '68vw']}
                                transition="0.3s"
                                _hover={{
                                    width: '66vw',
                                }}
                            >
                                <Image
                                    maxH={'32px'}
                                    src={gmailImg}
                                />
                                <Text marginLeft={'8px'}>r4f4siqueira@gmail.com</Text>
                            </Box>
                        </Link>
                    </Box>
                </CardBody>
            </Card>
        </Box>
    );
}
export default Home;
