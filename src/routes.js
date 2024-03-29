import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Links from './Pages/links';
import Projetos from './Pages/Projects';
import Creditos from './Pages/Credits';
import Jovanna from './Pages/jovanna';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={[<Header />, <Links />]}
                />
                <Route
                    path="/projects"
                    element={[<Header />, <Projetos />]}
                />
                <Route
                    path="/credits"
                    element={[<Header />, <Creditos />]}
                />

                <Route
                    path="/amoajovannamuitomuito"
                    element={<Jovanna />}
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
