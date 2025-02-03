import Footer from '../../Components/Footer';
import { Container, ContainerPerfil } from './style';
import gitHubImg from '../../assets/GitHub-Mark-Light-120px-plus.png';
import instaImg from '../../assets/Instagram.png';
import faceImg from '../../assets/facebook.png';
import linkedinImg from '../../assets/linkedin.png';
import gmailImg from '../../assets/google_mail_gmail.png';
import { useEffect, useState } from 'react';
import apiGithub from '../../services/github';

function Links() {
    const [perfilGithub, setPerfilGithub] = useState([]);

    useEffect(() => {
        async function load() {
            const [repositorioData] = await Promise.all([apiGithub.get(``)]);
            setPerfilGithub(repositorioData.data);
        }
        load();
    }, []);
    return (
        <>
            <Container>
                <ContainerPerfil>
                    <div>
                        <img
                            className="img-perfil"
                            src={perfilGithub.avatar_url}
                            alt="Imagem de perfil"
                        ></img>
                    </div>
                    <div className="div-description">
                        <span className="span-description">
                            My name is Rafael, I have seven years of experience in software development. I created this
                            website at the beginning of my studies and I maintain it with some updates. If you want to
                            know more about me, follow my social networks below:
                        </span>
                    </div>
                </ContainerPerfil>
                <div>
                    <a
                        className="btlinks par"
                        href="https://www.linkedin.com/in/rafael-siqueira-a6a3a116b/"
                        target="blank"
                    >
                        <div className="imglinks">
                            <img
                                src={linkedinImg}
                                alt="linkedin"
                            ></img>
                        </div>
                        <div className="spanlinks">
                            <span>Rafael Siqueira</span>
                        </div>
                    </a>
                </div>

                <div>
                    <a
                        className="btlinks impar"
                        href="https://github.com/r4f4siqueira"
                        target="blank"
                    >
                        <div className="imglinks">
                            <img
                                src={gitHubImg}
                                alt="github"
                            ></img>
                        </div>
                        <div className="spanlinks">
                            <span>r4f4siqueira</span>
                        </div>
                    </a>
                </div>

                <div>
                    <a
                        className="btlinks impar"
                        href="https://www.facebook.com/rafael.foguinho.9"
                        target="blank"
                    >
                        <div className="imglinks">
                            <img
                                src={faceImg}
                                alt="facebook"
                            ></img>
                        </div>
                        <div className="spanlinks">
                            <span>Rafael Siqueira</span>
                        </div>
                    </a>
                </div>

                <div>
                    <a
                        className="btlinks par"
                        href="https://www.instagram.com/r4f4siqueira/"
                        target="blank"
                    >
                        <div className="imglinks">
                            <img
                                src={instaImg}
                                alt="instagran"
                            ></img>
                        </div>
                        <div className="spanlinks">
                            <span>@r4f4siqueira</span>
                        </div>
                    </a>
                </div>

                <div>
                    <a
                        className="btlinks impar copia"
                        href="mailto:r4f4siqueira@gmail.com?Subject:Encontrei%seu%Site&body=Gostaria%de%saber%mais%sobre%você"
                        target="blank"
                    >
                        <div className="imglinks">
                            <img
                                src={gmailImg}
                                alt="gmail"
                            ></img>
                        </div>
                        <div className="spanlinks">
                            <span>r4f4siqueira@gmail.com</span>
                        </div>
                    </a>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
}
export default Links;
