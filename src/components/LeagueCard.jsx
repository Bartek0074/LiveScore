import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/LeagueCard.scss';

export default function LeagueCard({ league }) {
	const navigate = useNavigate();
	return (
		<div className='league-card'>
			{league && (
				<>
					<div className='league-card__logo'>
						<img
							onClick={() => {
								navigate(`/league/${league.id}`);
							}}
							src={league.logo}
							alt={`${league.name} logo`}
						/>
					</div>
					<div className='league-card__info'>
						<p
							onClick={() => {
								navigate(`/league/${league.id}`);
							}}
							className='league-card__club-name'
						>
							{league.name}
						</p>
						<div className='league-card__country'>
							{league.flag && (
								<div className='league-card__flag'>
									<img src={league.flag} alt={`${league.country} flag`} />
								</div>
							)}
							<p className='league-card__country-name'>{league.country}</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
