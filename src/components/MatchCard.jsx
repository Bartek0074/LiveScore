import React from 'react';

import { getMatchTime } from '../utils/getMatchTime';

import '../styles/MatchCard.scss';

export default function MatchCard({ match }) {
	console.log(match);
	return (
		<div
			onClick={() => {
				console.log(match?.fixture?.id);
			}}
			className='match-card'
		>
			<div className='match-card__time'>
				{match?.fixture?.status?.short === 'NS' && (
					<p>{getMatchTime(match?.fixture?.date)}</p>
				)}
				{match?.fixture?.status?.short === '1H' && (
					<p className='match-card__time-live'>
						{match?.fixture?.status?.elapsed}'
					</p>
				)}
				{match?.fixture?.status?.short === 'HT' && (
					<p className='match-card__time-live'>Half Time</p>
				)}
				{match?.fixture?.status?.short === '2H' && (
					<p className='match-card__time-live'>
						{match?.fixture?.status?.elapsed}'
					</p>
				)}
				{match?.fixture?.status?.short === 'FT' && <p>Finished</p>}
				{match?.fixture?.status?.short === 'PST' && <p>Postponed</p>}
				{match?.fixture?.status?.short === 'CANC' && <p>Cancelled</p>}
			</div>
			<div className='match-card__teams'>
				<div className='match-card__team'>
					<div className='match-card__team-logo'>
						<img src={match?.teams?.home?.logo} alt='' />
					</div>
					<div className='match-card__team-name'>
						{match?.fixture?.status?.short === 'FT' ? (
							<p
								className={`${
									match?.score?.fulltime?.home > match?.score?.fulltime?.away
										? 'match-card__team-name-bold'
										: ''
								}`}
							>
								{match?.teams?.home?.name}
							</p>
						) : (
							<p> {match?.teams?.home?.name} </p>
						)}
					</div>
				</div>
				<div className='match-card__team'>
					<div className='match-card__team-logo'>
						<img src={match?.teams?.away?.logo} alt='' />
					</div>
					<div className='match-card__team-name'>
						{match?.fixture?.status?.short === 'FT' ? (
							<p
								className={`${
									match?.score?.fulltime?.home < match?.score?.fulltime?.away
										? 'match-card__team-name-bold'
										: ''
								}`}
							>
								{match?.teams?.away?.name}
							</p>
						) : (
							<p> {match?.teams?.away?.name} </p>
						)}
					</div>
				</div>
			</div>
			<div className='match-card__scores'>
				<div className='match-card__score'>
					<div className='match-card__score-fulltime'>
						{match?.fixture?.status?.short === 'NS' && <p>-</p>}
						{match?.fixture?.status?.short === '1H' && (
							<p>{match?.goals?.home}</p>
						)}
						{match?.fixture?.status?.short === 'HT' && (
							<p>{match?.goals?.home}</p>
						)}
						{match?.fixture?.status?.short === '2H' && (
							<p>{match?.goals?.home}</p>
						)}
						{match?.fixture?.status?.short === 'FT' && (
							<p>{match?.score?.fulltime?.home}</p>
						)}
						{match?.fixture?.status?.short === 'PST' && <p>-</p>}
						{match?.fixture?.status?.short === 'CANC' && <p>-</p>}
					</div>
					<div className='match-card__score-fulltime'>
						{match?.fixture?.status?.short === 'NS' && <p>-</p>}
						{match?.fixture?.status?.short === '1H' && (
							<p>{match?.goals?.away}</p>
						)}
						{match?.fixture?.status?.short === 'HT' && (
							<p>{match?.goals?.away}</p>
						)}
						{match?.fixture?.status?.short === '2H' && (
							<p>{match?.goals?.away}</p>
						)}
						{match?.fixture?.status?.short === 'FT' && (
							<p>{match?.score?.fulltime?.away}</p>
						)}
						{match?.fixture?.status?.short === 'PST' && <p>-</p>}
						{match?.fixture?.status?.short === 'CANC' && <p>-</p>}
					</div>
				</div>
				<div className='match-card__score'>
					<div className='match-card__score-halftime'>
						{match?.fixture?.status?.short === 'NS' && null}
						{match?.fixture?.status?.short === '1H' && (
							<p>({match?.score?.halftime?.home})</p>
						)}
						{match?.fixture?.status?.short === 'HT' && (
							<p>({match?.score?.halftime?.home})</p>
						)}
						{match?.fixture?.status?.short === '2H' && (
							<p>({match?.score?.halftime?.home})</p>
						)}
						{match?.fixture?.status?.short === 'FT' && (
							<p>({match?.score?.halftime?.home})</p>
						)}
						{match?.fixture?.status?.short === 'PST' && null}
						{match?.fixture?.status?.short === 'CANC' && null}
					</div>
					<div className='match-card__score-halftime'>
						{match?.fixture?.status?.short === 'NS' && null}
						{match?.fixture?.status?.short === '1H' && (
							<p>({match?.score?.halftime?.away})</p>
						)}
						{match?.fixture?.status?.short === 'HT' && (
							<p>({match?.score?.halftime?.away})</p>
						)}
						{match?.fixture?.status?.short === '2H' && (
							<p>({match?.score?.halftime?.away})</p>
						)}
						{match?.fixture?.status?.short === 'FT' && (
							<p>({match?.score?.halftime?.away})</p>
						)}
						{match?.fixture?.status?.short === 'PST' && null}
						{match?.fixture?.status?.short === 'CANC' && null}
					</div>
				</div>
			</div>
		</div>
	);
}
