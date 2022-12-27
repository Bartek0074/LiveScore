import React, { useState, useEffect } from 'react';

import LeaguesBarMobile from './LeaguesBarMobile';
import LeaguesBarDesktop from './LeaguesBarDesktop';
import MatchCards from './MatchCards';
import DatePicker from './DatePicker';
import Filters from './Filters';

import { fetchFromAPI } from '../utils/fetchFromApi';
import { getDate } from '../utils/getDate';

import '../styles/Home.scss';

export default function Home() {
	const [leagueId, setLeagueId] = useState('all');
	const [fetchDate, setFetchDate] = useState(getDate(Date.now()));
	const [matches, setMatches] = useState([]);
	const [statuses, setStatuses] = useState([
		'TBD',
		'NS',
		'1H',
		'HT',
		'2H',
		'ET',
		'BT',
		'P',
		'SUSP',
		// 'INT',
		'FT',
		'AET',
		'PEN',
		'PST',
		'CANC',
		'ABD',
		'AWD',
		// 'WO',
		'LIVE',
	]);

	useEffect(() => {
		fetchFromAPI(`/fixtures?date=${fetchDate}&timezone=Europe/Warsaw`).then(
			(data) => {
				setMatches(data.response);
			}
		);
	}, [fetchDate]);

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
			<div className='home__filters'>
				<Filters setStatuses={setStatuses} />
			</div>
			<div className='home__match-cards'>
				<MatchCards matches={matches} statuses={statuses} leagueId={leagueId} />
			</div>
		</div>
	);
}
