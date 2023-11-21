import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Links from './Pages/links';
import Projetos from './Pages/Projects';
import Creditos from './Pages/Credits';

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
                    path="/projects"
                    element={<Projetos />}
                />
                <Route
                    path="/credits"
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
