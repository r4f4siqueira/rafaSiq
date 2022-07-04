import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Projetos from "./Pages/Projetos";
import Home from "./Pages/Home";
import Links from "./Pages/links";
import Creditos from "./Pages/Creditos";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/links" element={<Links />} />
                <Route path="/creditos" element={<Creditos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
