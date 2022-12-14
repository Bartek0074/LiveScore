import React from 'react';

import { getMatchTime } from '../utils/getMatchTime';

import '../styles/MatchCard.scss';

export default function MatchCard({ match }) {
	// console.log(match?.score?.fulltime?.home);
	return (
		<div className='match-card'>
			<div className='match-card__time'>
				<p>{getMatchTime(match?.fixture?.date)}</p>
			</div>
			<div className='match-card__teams'>
				<div className='match-card__team'>
					<div className='match-card__team-logo'>
						<img src={match?.teams?.home?.logo} alt='' />
					</div>
					<p className='match-card__team-name'>{match?.teams?.home?.name}</p>
				</div>
				<div className='match-card__team'>
					<div className='match-card__team-logo'>
						<img src={match?.teams?.away?.logo} alt='' />
					</div>
					<p className='match-card__team-name'>{match?.teams?.away?.name}</p>
				</div>
			</div>
			<div className='match-card__scores'>
				<div className='match-card__score'>
					<p className='match-card__score-fulltime'>
						{match?.score?.fulltime?.home}
					</p>
					<p className='match-card__score-fulltime'>
						{match?.score?.fulltime?.away}
					</p>
				</div>
				<div className='match-card__score'>
					<p className='match-card__score-halftime'>
						({match?.score?.fulltime?.home})
					</p>
					<p className='match-card__score-halftime'>
						({match?.score?.fulltime?.away})
					</p>
				</div>
			</div>
			{/* <p>
				{match.teams.away.name} - {match.teams.home.name}
			</p> */}
		</div>
	);
}
