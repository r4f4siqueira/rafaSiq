import Footer from "../../Components/Footer";
import { Container } from "./style";
import gitHubImg from "../../assets/GitHub-Mark-Light-120px-plus.png";

function Links() {
    return (
        <>
            <Container>
                <div>
                    <a className="btlinks" href="https://github.com/r4f4siqueira" target="blank">
                        <div className="imglinks">
                            <img src={gitHubImg}></img>
                        </div>
                        <div className="spanlinks">
                            <span>r4f4siqueira</span>
                        </div>
                    </a>
                </div>

                <div>
                    <a className="btlinks" href="https://github.com/r4f4siqueira" target="blank">
                        <div className="imglinks">
                            <img src={gitHubImg}></img>
                        </div>
                        <div className="spanlinks">
                            <span>r4f4siqueira</span>
                        </div>
                    </a>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
}
export default Links;
