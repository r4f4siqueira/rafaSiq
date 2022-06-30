import { useParams } from "react-router-dom";

function Links() {
    const { idTema } = useParams();

    return (
        <div>
            <h1>Links</h1>
            <p>Linsk {idTema}</p>
        </div>
    );
}
export default Links;
