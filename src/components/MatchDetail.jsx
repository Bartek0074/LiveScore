import React, { useState, useEffect } from 'react';

import { getDateWithHour } from '../utils/getDateWithHour';
import { leagues } from '../utils/constants';
import LeagueCard from './LeagueCard';

import { useParams } from 'react-router-dom';

import '../styles/MatchDetail.scss';

import { fetchFromAPI } from '../utils/fetchFromApi';

import { notStartedFixture } from '../utils/notStartedFixture';
import { firstHalfFixture } from '../utils/firstHalfFixture';
import { halfTimeFixture } from '../utils/halfTimeFixture';
import { secondHalfFixture } from '../utils/secondHalfFixture';
import { extraTimeFixture } from '../utils/extraTimeFixture';
import { breakTimeFixture } from '../utils/breakTimeFixture';
import { penInProgressFixture } from '../utils/penInProgressFixture';
import { fullTimeFixture } from '../utils/fullTimeFixture';
import { fullTimeFixture2 } from '../utils/fullTimeFixture2';
import { aetFixture } from '../utils/aetFixture';
import { penFixture } from '../utils/penFixture';
import { postponedFixture } from '../utils/postponedFixture';
import { cancelledFixture } from '../utils/cancelledFixture';
import { matchAbandoned } from '../utils/matchAbandoned';
import { technicalLossFixture } from '../utils/technicalLossFixture';

import Summary from './Summary';
import Lineups from './Lineups';
import Stats from './Stats';

export default function MatchDetail() {
	const { id } = useParams();

	// const [match, setMatch] = useState([]);
	// const [league, setLeague] = useState();
	const [section, setSection] = useState('summary');

	// useEffect(() => {
	// 	fetchFromAPI(`/fixtures?id=${id}&timezone=Europe/Warsaw`).then((data) => {
	// 		setMatch(data?.response[0]);
	// 		console.log(data?.response[0]);
	// 	});
	// }, [id]);

	// useEffect(() => {
	// 	const newLeague = leagues.find((leagueEl) => leagueEl?.id === league?.id);
	// 	setLeague(newLeague);
	// }, [match]);

	const match = penInProgressFixture.response[0];
	const league = leagues.find((leagueEl) => leagueEl?.id === match.league?.id);

	// console.log(match);

	return (
		<div className='match-detail match-wrapper'>
			<LeagueCard league={league} />
			<div className='match-detail__result'>
				<div className='match-detail__team'>
					<div className='match-detail__team-logo'>
						<img src={match?.teams?.home?.logo} alt='' />
					</div>
					<div className='match-detail__team-name'>
						<p
							className={`${
								match?.teams?.home?.winner ? 'match-detail__team-name-bold' : ''
							}`}
						>
							{match?.teams?.home?.name}
						</p>
					</div>
				</div>
				<div className='match-detail__info'>
					<p
						className={`${
							match?.fixture?.status?.short !== 'PST' &&
							match?.fixture?.status?.short !== 'CANC' &&
							match?.fixture?.status?.short !== 'ABD' &&
							match?.fixture?.status?.short !== 'AWD'
								? 'match-detail__date'
								: 'match-detail__date match-detail__date--line-through'
						}`}
					>
						{getDateWithHour(match?.fixture?.date)}
					</p>

					{match?.fixture?.status?.short === 'NS' && (
						<p className='match-detail__score'>-</p>
					)}
					{match?.fixture?.status?.short === '1H' && (
						<p className='match-detail__score match-detail__score--live'>
							{match?.goals?.home}-{match?.goals?.away}
						</p>
					)}
					{match?.fixture?.status?.short === 'HT' && (
						<p className='match-detail__score match-detail__score--live'>
							{match?.goals?.home}-{match?.goals?.away}
						</p>
					)}
					{match?.fixture?.status?.short === '2H' && (
						<p className='match-detail__score match-detail__score--live'>
							{match?.goals?.home}-{match?.goals?.away}
						</p>
					)}
					{match?.fixture?.status?.short === 'ET' && (
						<p className='match-detail__score match-detail__score--live'>
							{match?.goals?.home}-{match?.goals?.away}
						</p>
					)}
					{match?.fixture?.status?.short === 'BT' && (
						<p className='match-detail__score match-detail__score--live'>
							{match?.goals?.home}-{match?.goals?.away}
						</p>
					)}
					{match?.fixture?.status?.short === 'P' && (
						<p className='match-detail__score match-detail__score--live'>
							{match?.goals?.home}-{match?.goals?.away}
						</p>
					)}
					{match?.fixture?.status?.short === 'FT' && (
						<p className='match-detail__score'>
							{match?.goals?.home}-{match?.goals?.away}
						</p>
					)}
					{match?.fixture?.status?.short === 'AET' && (
						<p className='match-detail__score'>
							{match?.goals?.home}-{match?.goals?.away}
						</p>
					)}
					{match?.fixture?.status?.short === 'PEN' && (
						<p className='match-detail__score'>
							{match?.teams?.home?.winner
								? match?.goals?.home + 1
								: match?.goals?.home}
							-
							{match?.teams?.away?.winner
								? match?.goals?.away + 1
								: match?.goals?.away}
						</p>
					)}
					{match?.fixture?.status?.short === 'PST' && (
						<p className='match-detail__score'>-</p>
					)}
					{match?.fixture?.status?.short === 'CANC' && (
						<p className='match-detail__score'>-</p>
					)}
					{match?.fixture?.status?.short === 'ABD' && (
						<p className='match-detail__score'>-</p>
					)}
					{match?.fixture?.status?.short === 'AWD' && (
						<p className='match-detail__score'>
							{match?.goals?.home}-{match?.goals?.away}
						</p>
					)}

					{match?.fixture?.status?.short === 'ET' && (
						<p className='match-detail__score-second'>
							({match?.score?.fulltime?.home}-{match?.score?.fulltime?.away})
						</p>
					)}
					{match?.fixture?.status?.short === 'P' && (
						<p className='match-detail__score-second'>
							({match?.score?.fulltime?.home}-{match?.score?.fulltime?.away})
						</p>
					)}
					{match?.fixture?.status?.short === 'AET' && (
						<p className='match-detail__score-second'>
							({match?.score?.fulltime?.home}-{match?.score?.fulltime?.away})
						</p>
					)}
					{match?.fixture?.status?.short === 'PEN' && (
						<p className='match-detail__score-second'>
							({match?.score?.fulltime?.home}-{match?.score?.fulltime?.away})
						</p>
					)}

					{match?.fixture?.status?.short === 'NS' && (
						<p className='match-detail__status'>Not started</p>
					)}
					{match?.fixture?.status?.short === '1H' && (
						<p className='match-detail__status match-detail__status--live'>
							1st half - {match?.fixture?.status?.elapsed}'
						</p>
					)}
					{match?.fixture?.status?.short === 'HT' && (
						<p className='match-detail__status match-detail__status--live'>
							Half time
						</p>
					)}
					{match?.fixture?.status?.short === '2H' && (
						<p className='match-detail__status match-detail__status--live'>
							2nd half - {match?.fixture?.status?.elapsed}'
						</p>
					)}
					{match?.fixture?.status?.short === 'ET' && (
						<p className='match-detail__status match-detail__status--live'>
							extra time - {match?.fixture?.status?.elapsed}'
						</p>
					)}
					{match?.fixture?.status?.short === 'BT' && (
						<p className='match-detail__status match-detail__status--live'>
							Break time
						</p>
					)}
					{match?.fixture?.status?.short === 'P' && (
						<p className='match-detail__status match-detail__status--live'>
							Penalties
						</p>
					)}
					{match?.fixture?.status?.short === 'FT' && (
						<p className='match-detail__status'>Finished</p>
					)}
					{match?.fixture?.status?.short === 'AET' && (
						<p className='match-detail__status'>After extra time</p>
					)}
					{match?.fixture?.status?.short === 'PEN' && (
						<p className='match-detail__status'>After penalties</p>
					)}
					{match?.fixture?.status?.short === 'PST' && (
						<p className='match-detail__status'>Postponed</p>
					)}
					{match?.fixture?.status?.short === 'CANC' && (
						<p className='match-detail__status'>Cancelled</p>
					)}
					{match?.fixture?.status?.short === 'ABD' && (
						<p className='match-detail__status'>Abandoned</p>
					)}
					{match?.fixture?.status?.short === 'AWD' && (
						<p className='match-detail__status'>Technical loss</p>
					)}
				</div>
				<div className='match-detail__team'>
					<div className='match-detail__team-logo'>
						<img src={match?.teams?.away?.logo} alt='' />
					</div>
					<div className='match-detail__team-name'>
						<p
							className={`${
								match?.teams?.away?.winner ? 'match-detail__team-name-bold' : ''
							}`}
						>
							{match?.teams?.away?.name}
						</p>
					</div>
				</div>
			</div>

			{(match?.fixture?.status?.short === '1H' ||
				match?.fixture?.status?.short === 'HT' ||
				match?.fixture?.status?.short === '2H' ||
				match?.fixture?.status?.short === 'ET' ||
				match?.fixture?.status?.short === 'BT' ||
				match?.fixture?.status?.short === 'P' ||
				match?.fixture?.status?.short === 'SUSP' ||
				match?.fixture?.status?.short === 'INT' ||
				match?.fixture?.status?.short === 'FT' ||
				match?.fixture?.status?.short === 'AET' ||
				match?.fixture?.status?.short === 'PEN') && (
				<>
					<div className='match-detail__section-switcher'>
						<button
							onClick={() => {
								setSection('summary');
							}}
							className={
								section === 'summary'
									? 'match-detail__section-btn match-detail__section-btn--active'
									: 'match-detail__section-btn'
							}
						>
							Summary
						</button>
						<button
							onClick={() => {
								setSection('stats');
							}}
							className={
								section === 'stats'
									? 'match-detail__section-btn match-detail__section-btn--active'
									: 'match-detail__section-btn'
							}
						>
							Stats
						</button>
						<button
							onClick={() => {
								setSection('lineups');
							}}
							className={
								section === 'lineups'
									? 'match-detail__section-btn match-detail__section-btn--active'
									: 'match-detail__section-btn'
							}
						>
							Lineups
						</button>
					</div>
					<div className='match-detail__section-box'>
						{section === 'summary' && <Summary match={match} />}
						{section === 'stats' && <Stats stats={match?.statistics} />}
						{section === 'lineups' && <Lineups match={match} />}
					</div>
				</>
			)}

			{match?.fixture?.status?.short !== 'PST' &&
				match?.fixture?.status?.short !== 'CANC' && (
					<div className='match-detail__other-info'>
						<div className='match-detail__other-info-heading'>
							<p>Match information</p>
						</div>
						<div className='match-detail__other-info-element'>
							<p className='match-detail__other-info-name'>referee:</p>
							<p className='match-detail__other-info-value'>
								{match?.fixture?.referee}
							</p>
						</div>
						<div className='match-detail__other-info-element'>
							<p className='match-detail__other-info-name'>venue:</p>
							<p className='match-detail__other-info-value'>
								{match?.fixture?.venue?.name} ({match?.fixture?.venue?.city})
							</p>
						</div>
					</div>
				)}
		</div>
	);
}
