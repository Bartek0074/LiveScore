import React from 'react';

import { GiPodium } from 'react-icons/gi';

import '../styles/LeagueCard.scss';

export default function LeagueCard({ league }) {
	return (
		<div className='league-card'>
			<div className='league-card__logo'>
				<img src={league.logo} alt='' />
			</div>
			<div className='league-card__info'>
				<button className='league-card__club-name'>{league.name}</button>
				<div className='league-card__country'>
					<div className='league-card__flag'>
						<img src={league.flag} alt='' />
					</div>
					<p className='league-card__country-name'>{league.country}</p>
				</div>
			</div>
			<button className='league-card__standings-btn-mobile'>
				<GiPodium className='icon' />
			</button>
			<button className='league-card__standings-btn-desktop'>Standings</button>
		</div>
	);
}
