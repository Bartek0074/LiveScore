import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { leagues } from '../utils/constants';

import StandingsWithTopScorers from './StandingsWithTopScorers';

import { fetchFromAPI } from '../utils/fetchFromApi';

import '../styles/LeagueDetail.scss';
import Results from './Results';
import Fixtures from './Fixtures';

export default function LeagueDetail() {
	const { id } = useParams();

	const [seasons, setSeasons] = useState();
	const [season, setSeason] = useState();
	const [league, setLeague] = useState();
	const [section, setSection] = useState('standings');
	const [standings, setStandings] = useState();
	const [topScorers, setTopScorers] = useState();
	const [matches, setMatches] = useState([]);

	useEffect(() => {
		fetchFromAPI(`/leagues?id=${id}`).then((data) => {
			setSeasons(data?.response[0]?.seasons.reverse());
			setSeason(data?.response[0]?.seasons[0].year);
		});
		const newLeague = leagues.find((leagueEl) => leagueEl?.id == id);
		setLeague(newLeague);
	}, [id]);

	useEffect(() => {
		fetchFromAPI(`/standings?league=${league?.id}&season=${season}`).then(
			(data) => {
				setStandings(data?.response[0]);
			}
		);
		fetchFromAPI(
			`/players/topscorers?league=${league?.id}&season=${season}`
		).then((data) => {
			setTopScorers(data?.response);
		});
		fetchFromAPI(`/fixtures?league=${league?.id}&season=${season}`).then(
			(data) => {
				setMatches(data?.response);
			}
		);
	}, [season, league]);

	return (
		<div className='league-detail match-wrapper'>
			<div className='league-detail__header'>
				<div className='league-detail__logo-box'>
					<img className='league-detail__logo' src={league?.logo} alt='' />
				</div>
				<div className='league-detail__info'>
					<p className='league-detail__league-name'>{league?.name}</p>
					<div className='league-detail__country'>
						<img
							className='league-detail__country-flag'
							src={league?.flag}
							alt=''
						/>
						<p className='league-detail__country-name'>{league?.country}</p>
					</div>
					<select className='league-detail__season-select' name='' id=''>
						{seasons?.map((season, id) => {
							return (
								<option
									onClick={(e) => setSeason(e.target.value)}
									value={season?.year}
									key={id}
								>
									{season?.year}/{season?.year + 1}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className='league-detail__section-switcher'>
				<button
					onClick={() => {
						setSection('standings');
					}}
					className={
						section === 'standings'
							? 'league-detail__section-btn league-detail__section-btn--active'
							: 'league-detail__section-btn'
					}
				>
					Standings
				</button>
				<button
					onClick={() => {
						setSection('results');
					}}
					className={
						section === 'results'
							? 'league-detail__section-btn league-detail__section-btn--active'
							: 'league-detail__section-btn'
					}
				>
					Results
				</button>
				<button
					onClick={() => {
						setSection('fixtures');
					}}
					className={
						section === 'fixtures'
							? 'league-detail__section-btn league-detail__section-btn--active'
							: 'league-detail__section-btn'
					}
				>
					Fixtures
				</button>
			</div>
			<div className='league-detail__section-box'>
				{section === 'standings' && (
					<StandingsWithTopScorers
						standings={standings}
						topScorers={topScorers}
					/>
				)}
				{section === 'results' && <Results matches={matches} />}
				{section === 'fixtures' && <Fixtures matches={matches} />}
			</div>
		</div>
	);
}
