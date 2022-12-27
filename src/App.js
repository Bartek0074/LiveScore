import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import './App.scss';
import MatchDetail from './components/MatchDetail';
import LeagueDetail from './components/LeagueDetail';
import PlayerDetail from './components/PlayerDetail';

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/match/:id' element={<MatchDetail/>} />
				<Route path='/league/:id' element={<LeagueDetail/>} />
				<Route path='/player/:id' element={<PlayerDetail/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
