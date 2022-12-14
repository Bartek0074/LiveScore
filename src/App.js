import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import './App.scss';
import { getDateArr } from './utils/getDateArr';

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/match/:id' exact element={<div>Match</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
