import React, { useState } from 'react';

import { getDateWithHour } from '../utils/getDateWithHour';
import { leagues } from '../utils/constants';
import LeagueCard from './LeagueCard';

import { useParams } from 'react-router-dom';

import '../styles/MatchDetail.scss';

import { notStartedFixture } from '../utils/notStartedFixture';
import { firstHalfFixture } from '../utils/firstHalfFixture';
import { halfTimeFixture } from '../utils/halfTimeFixture';
import { secondHalfFixture } from '../utils/secondHalfFixture';
import { fullTimeFixture } from '../utils/fullTimeFixture';
import { fullTimeFixture2 } from '../utils/fullTimeFixture2';
import { aetFixture } from '../utils/aetFixture';
import { penFixture } from '../utils/penFixture';
import { postponedFixture } from '../utils/postponedFixture';
import { cancelledFixture } from '../utils/cancelledFixture';
import Summary from './Summary';
import Lineups from './Lineups';
import Stats from './Stats';

export default function MatchDetail() {
	const { id } = useParams();

	const fixture = halfTimeFixture?.response[0];

	const [section, setSection] = useState('summary');

	const league = leagues.find((league) => league?.id === fixture?.league?.id);

	// console.log(fixture?.statistics);

	return (
		<div className='match-detail match-wrapper'>
			<LeagueCard league={league} />
			<div className='match-detail__result'>
				<div className='match-detail__team'>
					<div className='match-detail__team-logo'>
						<img src={fixture?.teams?.home?.logo} alt='' />
					</div>
					<div className='match-detail__team-name'>
						<p
							className={`${
								fixture?.teams?.home?.winner
									? 'match-detail__team-name-bold'
									: ''
							}`}
						>
							{fixture?.teams?.home?.name}
						</p>
					</div>
				</div>
				<div className='match-detail__info'>
					<p
						className={`${
							fixture?.fixture?.status?.short !== 'PST' &&
							fixture?.fixture?.status?.short !== 'CANC'
								? 'match-detail__date'
								: 'match-detail__date match-detail__date--line-through'
						}`}
					>
						{getDateWithHour(fixture?.fixture?.date)}
					</p>

					{fixture?.fixture?.status?.short === 'NS' && (
						<p className='match-detail__score'>-</p>
					)}
					{fixture?.fixture?.status?.short === '1H' && (
						<p className='match-detail__score match-detail__score--live'>
							{fixture?.goals?.home}-{fixture?.goals?.away}
						</p>
					)}
					{fixture?.fixture?.status?.short === 'HT' && (
						<p className='match-detail__score match-detail__score--live'>
							{fixture?.goals?.home}-{fixture?.goals?.away}
						</p>
					)}
					{fixture?.fixture?.status?.short === '2H' && (
						<p className='match-detail__score match-detail__score--live'>
							{fixture?.goals?.home}-{fixture?.goals?.away}
						</p>
					)}
					{fixture?.fixture?.status?.short === 'FT' && (
						<p className='match-detail__score'>
							{fixture?.goals?.home}-{fixture?.goals?.away}
						</p>
					)}
					{fixture?.fixture?.status?.short === 'AET' && (
						<p className='match-detail__score'>
							{fixture?.goals?.home}-{fixture?.goals?.away}
						</p>
					)}
					{fixture?.fixture?.status?.short === 'PEN' && (
						<p className='match-detail__score'>
							{fixture?.teams?.home?.winner
								? fixture?.goals?.home + 1
								: fixture?.goals?.home}
							-
							{fixture?.teams?.away?.winner
								? fixture?.goals?.away + 1
								: fixture?.goals?.away}
						</p>
					)}
					{fixture?.fixture?.status?.short === 'PST' && (
						<p className='match-detail__score'>-</p>
					)}
					{fixture?.fixture?.status?.short === 'CANC' && (
						<p className='match-detail__score'>-</p>
					)}

					{fixture?.fixture?.status?.short === 'AET' && (
						<p className='match-detail__score-second'>
							({fixture?.score?.fulltime?.home}-{fixture?.score?.fulltime?.away}
							)
						</p>
					)}
					{fixture?.fixture?.status?.short === 'PEN' && (
						<p className='match-detail__score-second'>
							({fixture?.score?.fulltime?.home}-{fixture?.score?.fulltime?.away}
							)
						</p>
					)}

					{fixture?.fixture?.status?.short === 'NS' && (
						<p className='match-detail__status'>Not started</p>
					)}
					{fixture?.fixture?.status?.short === '1H' && (
						<p className='match-detail__status match-detail__status--live'>
							1st half - {fixture?.fixture?.status?.elapsed}'
						</p>
					)}
					{fixture?.fixture?.status?.short === 'HT' && (
						<p className='match-detail__status match-detail__status--live'>
							Half time
						</p>
					)}
					{fixture?.fixture?.status?.short === '2H' && (
						<p className='match-detail__status match-detail__status--live'>
							2nd half - {fixture?.fixture?.status?.elapsed}'
						</p>
					)}
					{fixture?.fixture?.status?.short === 'FT' && (
						<p className='match-detail__status'>Finished</p>
					)}
					{fixture?.fixture?.status?.short === 'AET' && (
						<p className='match-detail__status'>After extra time</p>
					)}
					{fixture?.fixture?.status?.short === 'PEN' && (
						<p className='match-detail__status'>After penalties</p>
					)}
					{fixture?.fixture?.status?.short === 'PST' && (
						<p className='match-detail__status'>Postponed</p>
					)}
					{fixture?.fixture?.status?.short === 'CANC' && (
						<p className='match-detail__status'>Cancelled</p>
					)}
				</div>
				<div className='match-detail__team'>
					<div className='match-detail__team-logo'>
						<img src={fixture?.teams?.away?.logo} alt='' />
					</div>
					<div className='match-detail__team-name'>
						<p
							className={`${
								fixture?.teams?.away?.winner
									? 'match-detail__team-name-bold'
									: ''
							}`}
						>
							{fixture?.teams?.away?.name}
						</p>
					</div>
				</div>
			</div>

			{(fixture?.fixture?.status?.short === '1H' ||
				fixture?.fixture?.status?.short === 'HT' ||
				fixture?.fixture?.status?.short === '2H' ||
				fixture?.fixture?.status?.short === 'ET' ||
				fixture?.fixture?.status?.short === 'BT' ||
				fixture?.fixture?.status?.short === 'P' ||
				fixture?.fixture?.status?.short === 'SUSP' ||
				fixture?.fixture?.status?.short === 'INT' ||
				fixture?.fixture?.status?.short === 'FT' ||
				fixture?.fixture?.status?.short === 'AET' ||
				fixture?.fixture?.status?.short === 'PEN') && (
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
						{section === 'summary' && <Summary match={fixture} />}
						{section === 'stats' && <Stats stats={fixture?.statistics} />}
						{section === 'lineups' && <Lineups match={fixture} />}
					</div>
				</>
			)}

			{fixture?.fixture?.status?.short !== 'PST' &&
				fixture?.fixture?.status?.short !== 'CANC' && (
					<div className='match-detail__other-info'>
						<div className='match-detail__other-info-heading'>
							<p>Match information</p>
						</div>
						<div className='match-detail__other-info-element'>
							<p className='match-detail__other-info-name'>referee:</p>
							<p className='match-detail__other-info-value'>
								{fixture?.fixture?.referee}
							</p>
						</div>
						<div className='match-detail__other-info-element'>
							<p className='match-detail__other-info-name'>venue:</p>
							<p className='match-detail__other-info-value'>
								{fixture?.fixture?.venue?.name} ({fixture?.fixture?.venue?.city}
								)
							</p>
						</div>
					</div>
				)}
		</div>
	);
}
