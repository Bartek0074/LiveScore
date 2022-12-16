import React from 'react';

import { getMatchTime } from '../utils/getMatchTime';

import { useNavigate } from 'react-router-dom';

import '../styles/MatchCard.scss';

export default function MatchCard({ match }) {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				navigate(`/match/${match?.fixture?.id}`);
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
				{match?.fixture?.status?.short === 'AET' && <p>AET</p>}
				{match?.fixture?.status?.short === 'PEN' && <p>Pen.</p>}
			</div>
			<div className='match-card__teams'>
				<div className='match-card__team'>
					<div className='match-card__team-logo'>
						<img src={match?.teams?.home?.logo} alt='' />
					</div>
					<div className='match-card__team-name'>
						<p
							className={`${
								match?.teams?.home?.winner && 'match-card__team-name-bold'
							}`}
						>
							{match?.teams?.home?.name}
						</p>
					</div>
				</div>
				<div className='match-card__team'>
					<div className='match-card__team-logo'>
						<img src={match?.teams?.away?.logo} alt='' />
					</div>
					<div className='match-card__team-name'>
						<p
							className={`${
								match?.teams?.away?.winner && 'match-card__team-name-bold'
							}`}
						>
							{match?.teams?.away?.name}
						</p>
					</div>
				</div>
			</div>
			<div className='match-card__scores'>
				<div className='match-card__score'>
					<div className='match-card__score-extratime'>
						{match?.fixture?.status?.short === 'AET' && (
							<p>{match?.goals?.home}</p>
						)}
						{match?.fixture?.status?.short === 'PEN' && (
							<p>
								{match?.score?.penalty?.home > match?.score?.penalty?.away
									? match?.goals?.home + 1
									: match?.goals?.home}
							</p>
						)}
					</div>
					<div className='match-card__score-extratime'>
						{match?.fixture?.status?.short === 'AET' && (
							<p>{match?.goals?.away}</p>
						)}
						{match?.fixture?.status?.short === 'PEN' && (
							<p>
								{match?.score?.penalty?.home < match?.score?.penalty?.away
									? match?.goals?.away + 1
									: match?.goals?.away}
							</p>
						)}
					</div>
				</div>
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
						{match?.fixture?.status?.short === 'AET' && (
							<p className='match-card__score-fulltime--not-bold'>
								{match?.score?.fulltime?.home}
							</p>
						)}
						{match?.fixture?.status?.short === 'PEN' && (
							<p className='match-card__score-fulltime--not-bold'>
								{match?.score?.fulltime?.home}
							</p>
						)}
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
						{match?.fixture?.status?.short === 'AET' && (
							<p className='match-card__score-fulltime--not-bold'>
								{match?.score?.fulltime?.away}
							</p>
						)}
						{match?.fixture?.status?.short === 'PEN' && (
							<p className='match-card__score-fulltime--not-bold'>
								{match?.score?.fulltime?.away}
							</p>
						)}
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
						{match?.fixture?.status?.short === 'AET' && (
							<p>({match?.score?.halftime?.home})</p>
						)}
						{match?.fixture?.status?.short === 'PEN' && (
							<p>({match?.score?.halftime?.home})</p>
						)}
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
						{match?.fixture?.status?.short === 'AET' && (
							<p>({match?.score?.halftime?.away})</p>
						)}
						{match?.fixture?.status?.short === 'PEN' && (
							<p>({match?.score?.halftime?.away})</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
