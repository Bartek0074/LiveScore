import React, { useState } from 'react';
import '../styles/LeaguesBarDesktop.scss';
import { leagues } from '../utils/constants';

export default function LeaguesBarDesktop({ setLeagueId }) {
	const [leagueName, setLeagueName] = useState('All leagues');

	return (
		<div className='leagues-bar-desktop'>
			<div className='leagues-bar-desktop__title'>
				<p>LEAGUES</p>
			</div>
			<div
				className={
					leagueName === 'All leagues'
						? 'leagues-bar-desktop__element leagues-bar-desktop__element--active'
						: 'leagues-bar-desktop__element'
				}
				onClick={() => {
					setLeagueName('All leagues');
					setLeagueId('all');
				}}
			>
				<p className='leagues-bar-desktop__name'>All leagues</p>
			</div>
			{leagues.map((league, id) => (
				<div
					className={
						leagueName === league.name
							? 'leagues-bar-desktop__element leagues-bar-desktop__element--active'
							: 'leagues-bar-desktop__element'
					}
					value={league.name}
					key={id}
					onClick={() => {
						setLeagueName(league.name);
						setLeagueId(league.id);
					}}
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
