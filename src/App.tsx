import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Game from "./pages/Game";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<ErrorBoundary>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/game' element={<Game />} />
					</Routes>
			</ErrorBoundary>
		</>
	);
}

export default App;
