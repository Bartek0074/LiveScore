import React, { useState, useEffect } from 'react';

import StandingsTable from './StandingsTable';
import '../styles/StandingsWithTopScorers.scss';
import TopScorers from './TopScorers';

export default function StandingsWithTopScorers({ standings, topScorers }) {
	const [section, setSection] = useState('standings');
	return (
		<div className='standings-component'>
			<div className='standings-component__section-switcher'>
				<button
					onClick={() => {
						setSection('standings');
					}}
					className={
						section === 'standings'
							? 'standings-component__section-btn standings-component__section-btn--active'
							: 'standings-component__section-btn'
					}
				>
					Standings
				</button>
				<button
					onClick={() => {
						setSection('top scorers');
					}}
					className={
						section === 'top scorers'
							? 'standings-component__section-btn standings-component__section-btn--active'
							: 'standings-component__section-btn'
					}
				>
					Top scorers
				</button>
			</div>
			{section === 'standings' && <StandingsTable standings={standings} />}
			{section === 'top scorers' && <TopScorers topScorers={topScorers} />}
		</div>
	);
}
