import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Projects from "./Pages/Projects";
import Credits from "./Pages/Credits";
import Links from "./Pages/Links";

function RoutesApp() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Links />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/credits" element={<Credits />} />

				<Route path="*" element={<Links />} />
			</Routes>
		</BrowserRouter>
	);
}

export default RoutesApp;
