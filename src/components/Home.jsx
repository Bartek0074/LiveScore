import React, { useState, useEffect } from 'react';

import LeaguesBarMobile from './LeaguesBarMobile';
import LeaguesBarDesktop from './LeaguesBarDesktop';
import MatchCards from './MatchCards';

import { fixtures } from '../utils/fixtures';
import { fixtures2 } from '../utils/fixtures2';
import { fixtures3 } from '../utils/fixtures3';
import { fixtures4 } from '../utils/fixtures4';
import { fixtures5 } from '../utils/fixtures5';
import { fixtures6 } from '../utils/fixtures6';
import { fullTimeFixture } from '../utils/fullTimeFixture';
import { fixturesWithExtraTime } from '../utils/fixturesWithExtraTime';
import { fixturesWithBreakTime } from '../utils/fixturesWithBreakTime';
import { fixturesWithPenInProgress } from '../utils/fixturesWithPenInProgress';

import { getDate } from '../utils/getDate';
import { fetchFromAPI } from '../utils/fetchFromApi';

import '../styles/Home.scss';
import DatePicker from './DatePicker';
import Filters from './Filters';
import { penInProgressFixture } from '../utils/penInProgressFixture';

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
		// 'SUSP',
		// 'INT',
		'FT',
		'AET',
		'PEN',
		'PST',
		'CANC',
		'ABD',
		'AWD',
		// 'WO',
		// 'LIVE',
	]);

	useEffect(() => {
		fetchFromAPI(`/fixtures?date=${fetchDate}&timezone=Europe/Warsaw`).then(
			(data) => {
				setMatches(data.response);
				console.log(data);
			}
		);
	}, [fetchDate]);

	// const matches = fixtures5.response;

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
