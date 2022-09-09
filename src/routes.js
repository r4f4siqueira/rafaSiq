import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Projetos from "./Pages/Projetos";
import Links from "./Pages/links";
import Creditos from "./Pages/Creditos";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Links />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/creditos" element={<Creditos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
