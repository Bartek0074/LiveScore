import React, { useState, useEffect } from 'react';

import LeaguesBarMobile from './LeaguesBarMobile';
import LeaguesBarDesktop from './LeaguesBarDesktop';
import MatchCards from './MatchCards';

import { fixtures } from '../utils/fixtures';

import { fetchFromAPI } from '../utils/fetchFromApi';

import '../styles/Home.scss';

export default function Home() {
	const [leagueId, setLeagueId] = useState('all');

	// useEffect(() => {
	// 	fetchFromAPI('/fixtures?date=2022-12-14').then((data) =>
	// 		console.log(data)
	// 	);
	// }, []);
// console.log(fixtures.response)
	return (
		<div className='home wrapper'>
			<div className='home__leagues-bar-mobile'>
				<LeaguesBarMobile setLeagueId={setLeagueId} />
			</div>
			<div className='home__leagues-bar-desktop'>
				<LeaguesBarDesktop setLeagueId={setLeagueId} />
			</div>
			<div className='home__match-cards'>
				<MatchCards matches={fixtures} leagueId={leagueId} />
			</div>
		</div>
	);
}
