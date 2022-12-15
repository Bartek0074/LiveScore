import React from 'react';

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

export default function MatchDetail() {
	const { id } = useParams();

	const fixture = fullTimeFixture?.response[0];

	const league = leagues.find((league) => league?.id === fixture?.league?.id);

	console.log(fixture?.fixture?.status?.elapsed);

	return (
		<div className='match-detail match-wrapper'>
			<LeagueCard league={league} />
			<div className='match-detail__result'>
				<div className='match-detail__team'>
					<div className='match-detail__team-logo'>
						<img src={fixture?.teams?.home?.logo} alt='' />
					</div>
					<div className='match-detail__team-name'>
						{fixture?.fixture?.status?.short === 'FT' ? (
							<p
								className={`${
									fixture?.score?.fulltime?.home >
									fixture?.score?.fulltime?.away
										? 'match-detail__team-name-bold'
										: ''
								}`}
							>
								{fixture?.teams?.home?.name}
							</p>
						) : (
							<p> {fixture?.teams?.home?.name}</p>
						)}
					</div>
				</div>
				<div className='match-detail__info'>
					<p className='match-detail__date'>
						{getDateWithHour(fixture?.fixture?.date)}
					</p>
					{fixture?.fixture?.status?.short === 'NS' && (
						<p className='match-detail__score'>'-' </p>
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

					{fixture?.fixture?.status?.short === 'NS' && (
						<p className='match-detail__status'>'Not started'</p>
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
				</div>
				<div className='match-detail__team'>
					<div className='match-detail__team-logo'>
						<img src={fixture?.teams?.away?.logo} alt='' />
					</div>
					<div className='match-detail__team-name'>
						{fixture?.fixture?.status?.short === 'FT' ? (
							<p
								className={`${
									fixture?.score?.fulltime?.home <
									fixture?.score?.fulltime?.away
										? 'match-detail__team-name-bold'
										: ''
								}`}
							>
								{fixture?.teams?.away?.name}
							</p>
						) : (
							<p> {fixture?.teams?.away?.name} </p>
						)}
					</div>
				</div>
			</div>
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
						{fixture?.fixture?.venue?.name} ({fixture?.fixture?.venue?.city})
					</p>
				</div>
			</div>
		</div>
	);
}
