import { Container } from './style';
import Footer from '../../Components/footer';

function Creditos() {
    return (
        <>
            <Container>
                <div className="linkCreditos">
                    <a
                        href="https://br.freepik.com/fotos-vetores-gratis/fundo-abstrato"
                        target="blank"
                    >
                        Fundo abstrato psd criado por freepik - br.freepik.com
                    </a>
                </div>
                <div className="linkCreditos">
                    <a
                        href="https://icon-icons.com"
                        target="blank"
                    >
                        Melhores ícones grátis para uso pessoal e comercial (SVG - PNG ) - icon-icons.com
                    </a>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
}
export default Creditos;
