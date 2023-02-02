import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Projetos from './Pages/Projetos';
import Creditos from './Pages/Creditos';
import Links from './Pages/links';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Links />}
                />
                <Route
                    path="/projetos"
                    element={<Projetos />}
                />
                <Route
                    path="/creditos"
                    element={<Creditos />}
                />

                <Route
                    path="*"
                    element={<Links />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
