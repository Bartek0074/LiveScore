import React, { useState } from 'react';

import { leagues } from '../utils/constants';

import '../styles/LeaguesBarDesktop.scss';

export default function LeaguesBarDesktop({ setLeagueId }) {
	const [leagueName, setLeagueName] = useState('All leagues');

	return (
		<div className='leagues-bar-desktop'>
			<div className='leagues-bar-desktop__title'>
				<p>LEAGUES</p>
			</div>
			<div
				onClick={() => {
					setLeagueName('All leagues');
					setLeagueId('all');
				}}
				className={
					leagueName === 'All leagues'
						? 'leagues-bar-desktop__element leagues-bar-desktop__element--active'
						: 'leagues-bar-desktop__element'
				}
			>
				<p className='leagues-bar-desktop__name'>All leagues</p>
			</div>
			{leagues.map((league, id) => (
				<div
					onClick={() => {
						setLeagueName(league.name);
						setLeagueId(league.id);
					}}
					value={league.name}
					className={
						leagueName === league.name
							? 'leagues-bar-desktop__element leagues-bar-desktop__element--active'
							: 'leagues-bar-desktop__element'
					}
					key={id}
				>
					<div className='leagues-bar-desktop__img-box'>
						<img
							className='leagues-bar-desktop__img'
							src={league.logo}
							alt={`${league.name} flag`}
						/>
					</div>
					<p className='leagues-bar-desktop__name'>{league.name}</p>
				</div>
			))}
		</div>
	);
}
