import gitHubImg from "../../assets/GitHub-Mark-Light-120px-plus.png";
import instaImg from "../../assets/Instagram.png";
import faceImg from "../../assets/facebook.png";
import linkedinImg from "../../assets/linkedin.png";
import gmailImg from "../../assets/google_mail_gmail.png";
import { useEffect, useState } from "react";
import apiGithub from "../../services/github";
import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";

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

	return (
		<Box display="flex" flexDir="column" alignItems={"center"}>
			<Card background={"#14052c"} w="70%" alignItems={"center"}>
				<CardBody display="flex" flexDir="column" alignItems={"center"}>
					<Image
						src={perfilGithub.avatar_url}
						alt="Profile Picture gitHub"
						borderRadius="lg"
						w={"192px"}
					/>
					<Box>
						<Text color={"white"}>
							Junior Full Stack Developer and bachelor's in Software
							Engineering;
						</Text>
					</Box>
				</CardBody>
				<p></p>
				<p></p>
				<p></p>
				<CardBody>
					<Image
						src={perfilGithub.avatar_url}
						alt="Profile Picture gitHub"
						borderRadius="lg"
						w={100}
					/>
					<Box>
						<Text color={"white"}>
							Junior Full Stack Developer and bachelor's in Software
							Engineering;
						</Text>
					</Box>
				</CardBody>
			</Card>
		</Box>
	);
}
export default Home;
