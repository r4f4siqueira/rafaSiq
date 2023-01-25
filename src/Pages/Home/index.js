import gitHubImg from '../../assets/GitHub-Mark-Light-120px-plus.png';
import instaImg from '../../assets/Instagram.png';
import faceImg from '../../assets/facebook.png';
import linkedinImg from '../../assets/linkedin.png';
import gmailImg from '../../assets/google_mail_gmail.png';
import { useEffect, useState } from 'react';
import apiGithub from '../../services/github';
import { Box, Card, CardBody, Image, Text } from '@chakra-ui/react';

function Home() {
    const [perfilGithub, setPerfilGithub] = useState([]);

    useEffect(() => {
        async function load() {
            const [repositorioData] = await Promise.all([apiGithub.get(``)]);
            setPerfilGithub(repositorioData.data);
        }
        load();
    }, []);
    return (
        <Card background={'#14052c'}>
            <CardBody>
                <Image
                    src={perfilGithub.avatar_url}
                    alt="Profile Picture gitHub"
                    borderRadius="lg"
                    w={100}
                />
            </CardBody>
            <Box>
                <Text
                    fontFamily={'Cascadia Mono'}
                    color={'white'}
                >
                    Junior Full Stack Developer and bachelor's in Software Engineering;
                </Text>
            </Box>
        </Card>
    );
}
export default Home;
