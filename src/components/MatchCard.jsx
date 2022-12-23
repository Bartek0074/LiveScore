import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getMatchTime } from '../utils/getMatchTime';
import { getDateWithoutHour } from '../utils/getDateWithoutHour';

import '../styles/MatchCard.scss';

export default function MatchCard({ match }) {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				navigate(`/match/${match?.fixture?.id}`);
			}}
			className='match-card'
		>
			<div className='match-card__time'>
				{(match?.fixture?.status?.short === 'TBD' ||
					match?.fixture?.status?.short === 'NS' ||
					match?.fixture?.status?.short === 'FT' ||
					match?.fixture?.status?.short === 'AET' ||
					match?.fixture?.status?.short === 'PEN' ||
					match?.fixture?.status?.short === 'PST' ||
					match?.fixture?.status?.short === 'CANC' ||
					match?.fixture?.status?.short === 'ABD' ||
					match?.fixture?.status?.short === 'AWD') && (
					<p className='match-card__date'>
						{getDateWithoutHour(match?.fixture?.date)}
					</p>
				)}
				{match?.fixture?.status?.short === 'TBD' && <p>TBD</p>}
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
				{match?.fixture?.status?.short === 'ET' && (
					<p className='match-card__time-live'>
						ET
						<br />
						{match?.fixture?.status?.elapsed}'
					</p>
				)}
				{match?.fixture?.status?.short === 'BT' && (
					<p className='match-card__time-live'>Break Time</p>
				)}
				{match?.fixture?.status?.short === 'P' && (
					<p className='match-card__time-live'>Pen.</p>
				)}
				{match?.fixture?.status?.short === 'FT' && <p>Finished</p>}
				{match?.fixture?.status?.short === 'AET' && <p>AET</p>}
				{match?.fixture?.status?.short === 'PEN' && <p>Pen.</p>}
				{match?.fixture?.status?.short === 'PST' && <p>Postponed</p>}
				{match?.fixture?.status?.short === 'CANC' && <p>Cancelled</p>}
				{match?.fixture?.status?.short === 'ABD' && <p>Abandoned</p>}
				{match?.fixture?.status?.short === 'AWD' && <p>Technical Loss</p>}
				{match?.fixture?.status?.short === 'LIVE' && (
					<p className='match-card__time-live'>Awaiting Updates</p>
				)}
			</div>
			<div className='match-card__teams'>
				<div className='match-card__team'>
					<div className='match-card__team-logo'>
						<img
							src={match?.teams?.home?.logo}
							alt={`${match?.teams?.home?.name} logo`}
						/>
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
						<img
							src={match?.teams?.away?.logo}
							alt={`${match?.teams?.away?.name} logo`}
						/>
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
						{match?.fixture?.status?.short === 'ET' && (
							<p>{match?.goals?.home}</p>
						)}
						{match?.fixture?.status?.short === 'P' && (
							<p>{match?.goals?.home}</p>
						)}
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
						{match?.fixture?.status?.short === 'ET' && (
							<p>{match?.goals?.away}</p>
						)}
						{match?.fixture?.status?.short === 'P' && (
							<p>{match?.goals?.away}</p>
						)}
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
						{match?.fixture?.status?.short === 'TBD' && <p>-</p>}
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
						{match?.fixture?.status?.short === 'ET' && (
							<p className='match-card__score-fulltime--not-bold'>
								{match?.score?.fulltime?.home}
							</p>
						)}
						{match?.fixture?.status?.short === 'BT' && (
							<p>{match?.goals?.home}</p>
						)}
						{match?.fixture?.status?.short === 'P' && (
							<p className='match-card__score-fulltime--not-bold'>
								{match?.score?.fulltime?.home}
							</p>
						)}
						{match?.fixture?.status?.short === 'FT' && (
							<p>{match?.score?.fulltime?.home}</p>
						)}
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
						{match?.fixture?.status?.short === 'PST' && <p>-</p>}
						{match?.fixture?.status?.short === 'CANC' && <p>-</p>}
						{match?.fixture?.status?.short === 'ABD' && <p>-</p>}
						{match?.fixture?.status?.short === 'AWD' && (
							<p>{match?.goals?.home}</p>
						)}
						{match?.fixture?.status?.short === 'LIVE' && (
							<p>{match?.goals?.home}</p>
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
						{match?.fixture?.status?.short === 'ET' && (
							<p className='match-card__score-fulltime--not-bold'>
								{match?.score?.fulltime?.away}
							</p>
						)}
						{match?.fixture?.status?.short === 'BT' && (
							<p>{match?.goals?.away}</p>
						)}
						{match?.fixture?.status?.short === 'P' && (
							<p className='match-card__score-fulltime--not-bold'>
								{match?.score?.fulltime?.away}
							</p>
						)}
						{match?.fixture?.status?.short === 'FT' && (
							<p>{match?.score?.fulltime?.away}</p>
						)}
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
						{match?.fixture?.status?.short === 'PST' && <p>-</p>}
						{match?.fixture?.status?.short === 'CANC' && <p>-</p>}
						{match?.fixture?.status?.short === 'ABD' && <p>-</p>}
						{match?.fixture?.status?.short === 'AWD' && (
							<p>{match?.goals?.away}</p>
						)}
						{match?.fixture?.status?.short === 'LIVE' && (
							<p>{match?.goals?.away}</p>
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
						{match?.fixture?.status?.short === 'ET' && (
							<p>({match?.score?.halftime?.home})</p>
						)}
						{match?.fixture?.status?.short === 'BT' && (
							<p>({match?.score?.halftime?.home})</p>
						)}
						{match?.fixture?.status?.short === 'P' && (
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
						{match?.fixture?.status?.short === 'ET' && (
							<p>({match?.score?.halftime?.away})</p>
						)}
						{match?.fixture?.status?.short === 'BT' && (
							<p>({match?.score?.halftime?.away})</p>
						)}
						{match?.fixture?.status?.short === 'P' && (
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
