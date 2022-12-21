import React from 'react';

import SummaryEvent from './SummaryEvent';

import '../styles/Summary.scss';

export default function Summary({ match }) {
	return (
		<div className='summary'>
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
					<div className='summary__section'>
						<p className='summary__section-title'>1st half</p>
						<p className='summary__section-score'>
							{match?.fixture?.status?.short === '1H' &&
								`${match?.goals?.home} - ${match?.goals?.away}`}
							{(match?.fixture?.status?.short === 'HT' ||
								match?.fixture?.status?.short === '2H' ||
								match?.fixture?.status?.short === 'ET' ||
								match?.fixture?.status?.short === 'P' ||
								match?.fixture?.status?.short === 'FT' ||
								match?.fixture?.status?.short === 'AET' ||
								match?.fixture?.status?.short === 'PEN') &&
								`${match?.score?.halftime?.home} - ${match?.score?.halftime?.away}`}
						</p>
					</div>
					{match?.events.map((eventEl, id) => {
						if (eventEl?.time?.elapsed <= 45) {
							return <SummaryEvent match={match} eventEl={eventEl} key={id} />;
						} else return null;
					})}
				</>
			)}
			{(match?.fixture?.status?.short === '2H' ||
				match?.fixture?.status?.short === 'ET' ||
				match?.fixture?.status?.short === 'BT' ||
				match?.fixture?.status?.short === 'P' ||
				match?.fixture?.status?.short === 'SUSP' ||
				match?.fixture?.status?.short === 'INT' ||
				match?.fixture?.status?.short === 'FT' ||
				match?.fixture?.status?.short === 'AET' ||
				match?.fixture?.status?.short === 'PEN') && (
				<>
					<div className='summary__section'>
						<p className='summary__section-title'>2nd half</p>
						<p className='summary__section-score'>
							{match?.fixture?.status?.short === '2H' &&
								`${match?.goals?.home} - ${match?.goals?.away}`}
							{(match?.fixture?.status?.short === 'ET' ||
								match?.fixture?.status?.short === 'P' ||
								match?.fixture?.status?.short === 'FT' ||
								match?.fixture?.status?.short === 'AET' ||
								match?.fixture?.status?.short === 'PEN') &&
								`${
									match?.score?.fulltime?.home - match?.score?.halftime?.home
								} - ${
									match?.score?.fulltime?.away - match?.score?.halftime?.away
								}`}
						</p>
					</div>
					{match?.events.map((eventEl, id) => {
						if (eventEl?.time?.elapsed <= 90 && eventEl?.time?.elapsed > 45) {
							return <SummaryEvent match={match} eventEl={eventEl} key={id} />;
						} else return null;
					})}
				</>
			)}
			{(match?.fixture?.status?.short === 'ET' ||
				match?.fixture?.status?.short === 'BT' ||
				match?.fixture?.status?.short === 'P' ||
				match?.fixture?.status?.short === 'SUSP' ||
				match?.fixture?.status?.short === 'INT' ||
				match?.fixture?.status?.short === 'AET' ||
				match?.fixture?.status?.short === 'PEN') && (
				<>
					<div className='summary__section'>
						<p className='summary__section-title'>extra time</p>
						<p className='summary__section-score'>
							{(match?.fixture?.status?.short === 'ET' ||
								match?.fixture?.status?.short === 'P' ||
								match?.fixture?.status?.short === 'AET' ||
								match?.fixture?.status?.short === 'PEN') &&
								`${match?.goals?.home - match?.score?.fulltime?.home} - ${
									match?.goals?.away - match?.score?.fulltime?.away
								}`}
						</p>
					</div>
					{match?.events.map((eventEl, id) => {
						if (
							eventEl?.time?.elapsed <= 120 &&
							eventEl?.time?.elapsed > 90 &&
							eventEl?.comments !== 'Penalty Shootout'
						) {
							return <SummaryEvent match={match} eventEl={eventEl} key={id} />;
						} else return null;
					})}
				</>
			)}
			{(match?.fixture?.status?.short === 'P' ||
				match?.fixture?.status?.short === 'PEN') && (
				<>
					<div className='summary__section'>
						<p className='summary__section-title'>penalties</p>
						<p className='summary__section-score'>
							{match?.score?.penalty?.home} - {match?.score?.penalty?.away}
						</p>
					</div>
					{match?.events.map((eventEl, id) => {
						if (eventEl?.comments === 'Penalty Shootout') {
							return <SummaryEvent match={match} eventEl={eventEl} key={id} />;
						} else return null;
					})}
				</>
			)}
		</div>
	);
}
