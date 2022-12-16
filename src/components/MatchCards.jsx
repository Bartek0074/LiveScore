import React, { useEffect, useState } from 'react';
import { leagues } from '../utils/constants';

import '../styles/MatchCards.scss';
import LeagueCard from './LeagueCard';
import MatchCard from './MatchCard';

export default function MatchCards({ matches, statuses, leagueId }) {
	const [leagueIdArr, setLeagueIdArr] = useState([]);
	const [filteredMatches, setFilteredMatches] = useState([]);
	const [filteredLeagues, setFilteredLeagues] = useState([]);

	useEffect(() => {
		if (leagueId === 'all') {
			let newLeagueIdArr = [];
			
			leagues.forEach((league) => {
				newLeagueIdArr.push(league.id);
			});
			setLeagueIdArr(newLeagueIdArr);
		} else {
			setLeagueIdArr([leagueId]);
		}
	}, [leagueId, matches]);

	useEffect(() => {
		const newFilteredMatches = matches.filter((match) => {
			if (statuses.includes(match?.fixture?.status?.short)) {
				return leagueIdArr.includes(match.league.id);
			}
		});

		setFilteredMatches(newFilteredMatches);
	}, [leagueIdArr, statuses]);

	useEffect(() => {
		let newFilteredLeagues = [];

		filteredMatches.forEach((filteredMatch) => {
			if (!newFilteredLeagues.includes(filteredMatch.league.id)) {
				newFilteredLeagues.push(filteredMatch.league.id);
			}
		});

		setFilteredLeagues(newFilteredLeagues);
	}, [filteredMatches]);

	return (
		<div className='match-cards'>
			{filteredMatches.length !== 0 ? (
				leagueIdArr.map((leagueId, leagueIdKey) => {
					if (filteredLeagues.includes(leagueId)) {
						const league = leagues.find((league) => league.id === leagueId);
						return (
							<div key={leagueIdKey} className='match-cards__element'>
								<LeagueCard league={league} />
								{filteredMatches.map((filteredMatch, filteredMatchKey) => {
									if (filteredMatch.league.id === leagueId) {
										return (
											<MatchCard match={filteredMatch} key={filteredMatchKey} />
										);
									}
								})}
							</div>
						);
					}
				})
			) : (
				<p>
					{leagueId === 'all'
						? 'No matches!'
						: `No matches in ${
								leagues.find((league) => league.id === leagueId).name
						  }!`}
				</p>
			)}
		</div>
	);
}
