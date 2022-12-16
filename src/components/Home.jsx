import React, { useState, useEffect } from 'react';

import LeaguesBarMobile from './LeaguesBarMobile';
import LeaguesBarDesktop from './LeaguesBarDesktop';
import MatchCards from './MatchCards';

import { fixtures } from '../utils/fixtures';
import { fixtures2 } from '../utils/fixtures2';
import { fixtures3 } from '../utils/fixtures3';
import { fixtures4 } from '../utils/fixtures4';
import { fullTimeFixture } from '../utils/fullTimeFixture';
import { notStartedFixture } from '../utils/notStartedFixture';


import { getDate } from '../utils/getDate';
import { fetchFromAPI } from '../utils/fetchFromApi';

import '../styles/Home.scss';
import DatePicker from './DatePicker';

export default function Home() {
	const [leagueId, setLeagueId] = useState('all');
	const [fetchDate, setFetchDate] = useState(getDate(Date.now()));
	const [matches, setMatches] = useState([]);

	// useEffect(() => {
	// 	fetchFromAPI(`/fixtures?id=590772`).then(
	// 		(data) => {
	// 			setMatches(data.response);
	// 			console.log(data);
	// 		}
	// 	);
	// }, [fetchDate]);

	// console.log('Not started:')
	// console.log(notStartedFixture.response)
	// console.log('-------------')
	// console.log('Full time:')
	// console.log(fullTimeFixture.response)

	// console.log(fetchDate);
	// console.log(matches);
	// console.log(fixtures2.response);

	return (
		<div className='home wrapper'>
			<div className='home__leagues-bar-mobile'>
				<LeaguesBarMobile setLeagueId={setLeagueId} />
			</div>
			<div className='home__leagues-bar-desktop'>
				<LeaguesBarDesktop setLeagueId={setLeagueId} />
			</div>
			<div className='home__date-picker'>
				<DatePicker setFetchDate={setFetchDate} />
			</div>
			<div className='home__match-cards'>
				<MatchCards matches={fixtures4.response} leagueId={leagueId} />
			</div>
		</div>
	);
}
