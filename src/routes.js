import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Projetos from "./Pages/Projetos";
import Home from "./Pages/Home";
import Links from "./Pages/links";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/links" element={<Links />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
