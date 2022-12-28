import React, { useEffect, useState } from 'react';

import { HiOutlineClock } from 'react-icons/hi';

import '../styles/PlayerStats.scss';

export default function PlayerStats({ stats }) {
	const [filteredStats, setFilteredStats] = useState([]);

	useEffect(() => {
		let newStats = [];
		stats.forEach((stat) => {
			if (
				stat?.league?.name !== 'Friendlies' &&
				stat?.league?.name !== 'Club Friendlies' &&
				!stat?.league?.name.includes('Qualifi')
			) {
				newStats.push(stat);
			}
		});
		setFilteredStats(newStats);
	}, [stats]);

	return (
		<div className='player-stats'>
			<div className='player-stats__element-header'>
				<div className='player-stats__competition-name-header'>
					<span>Competition</span>
				</div>
				<div className='player-stats__value-box'>
					<span>M</span>
				</div>
				<div className='player-stats__value-box'>
					<span>G</span>
				</div>
				<div className='player-stats__value-box'>
					<span>A</span>
				</div>
				<div className='player-stats__value-box'>
					<HiOutlineClock className='icon' />
				</div>
			</div>
			{filteredStats.map((stat, statId) => {
				return (
					<div className='player-stats__element' key={statId}>
						<div className='player-stats__logo-box'>
							<img
								className='player-stats__logo'
								src={
									stat?.league?.logo
										? stat?.league?.logo
										: 'https://media.api-sports.io/football/teams/5276.png'
								}
								alt={`${stat?.league?.name} logo`}
							/>
						</div>
						<div className='player-stats__competition-name'>
							<span>
								{stat?.league?.name.substring(0, 21)}
								{stat?.league?.name !== stat?.league?.name.substring(0, 21) &&
									'...'}
							</span>
						</div>
						<div className='player-stats__value-box'>
							<span>
								{stat?.games?.appearences ? `${stat?.games?.appearences}` : '0'}
							</span>
						</div>
						<div className='player-stats__value-box'>
							<span>{stat?.goals?.total ? `${stat?.goals?.total}` : '0'}</span>
						</div>
						<div className='player-stats__value-box'>
							<span>
								{stat?.goals?.assists ? `${stat?.goals?.assists}` : '0'}
							</span>
						</div>
						<div className='player-stats__value-box'>
							<span>
								{stat?.games?.minutes
									? stat?.games?.minutes
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
									: '0'}
								'
							</span>
						</div>
					</div>
				);
			})}
			<div className='player-stats__element player-stats__element--total'>
				<div></div>
				<div className='player-stats__competition-name'>
					<span>Total</span>
				</div>
				<div className='player-stats__value-box'>
					<span>
						{filteredStats.reduce((a, b) => a + b.games?.appearences, 0)}
					</span>
				</div>
				<div className='player-stats__value-box'>
					<span>{filteredStats.reduce((a, b) => a + b.goals?.total, 0)}</span>
				</div>
				<div className='player-stats__value-box'>
					<span>{filteredStats.reduce((a, b) => a + b.goals?.assists, 0)}</span>
				</div>
				<div className='player-stats__value-box'>
					<span>
						{filteredStats
							.reduce((a, b) => a + b.games?.minutes, 0)
							.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
						'
					</span>
				</div>
			</div>
			<div></div>
		</div>
	);
}
