import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import './App.scss';
import { getDateArr } from './utils/getDateArr';
import MatchDetail from './components/MatchDetail';

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/match/:id' exact element={<MatchDetail/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
