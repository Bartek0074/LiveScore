import React, { useState } from 'react';

import LeaguesBarMobile from './LeaguesBarMobile';
import LeaguesBarDesktop from './LeaguesBarDesktop';
import MatchCards from './MatchCards';

import '../styles/Home.scss';

export default function Home() {
	const [leagueId, setLeagueId] = useState('all');
	return (
		<div className='home wrapper'>
			<div className='home__leagues-bar-mobile'>
				<LeaguesBarMobile setLeagueId={setLeagueId} />
			</div>
			<div className='home__leagues-bar-desktop'>
				<LeaguesBarDesktop setLeagueId={setLeagueId} />
			</div>
			<div className='home__match-cards'>
				<MatchCards leagueId={leagueId} />
			</div>
		</div>
	);
}
