import Footer from '../../Components/Footer';
import { Container, ContainerPerfil } from './style';
import gitHubImg from '../../Assets/GitHub-Mark-Light-120px-plus.png';
import instaImg from '../../Assets/Instagram.png';
import faceImg from '../../Assets/facebook.png';
import linkedinImg from '../../Assets/linkedin.png';
import gmailImg from '../../Assets/google_mail_gmail.png';
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
                            Software Engineer from UNIGRAN, the university where I graduated in Software Engineering;
                            <br></br>I live in Dourados - MS Brazil, passionate about technology and extremely curious;
                            <br></br>Below are links where you can get in touch and find out more about me:
                        </span>
                    </div>
                </ContainerPerfil>
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
