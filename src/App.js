import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import './App.scss';
import { getDateArr } from './utils/getDateArr';
import MatchDetail from './components/MatchDetail';
import Standings from './components/Standings';

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/match/:id' element={<MatchDetail/>} />
				<Route path='/standings/:id' element={<Standings/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
