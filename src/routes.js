import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/Error";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function RoutesApp() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default RoutesApp;
