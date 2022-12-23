import React, { useState } from 'react';

import { leagues } from '../utils/constants';
import { countries } from '../utils/constants';

import { RiArrowDownSLine } from 'react-icons/ri';

import '../styles/LeaguesBarDesktop.scss';

export default function LeaguesBarDesktop({ setLeagueId }) {
	const [leagueName, setLeagueName] = useState('All leagues');
	const [country, setCountry] = useState('');

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
						? 'leagues-bar-desktop__league leagues-bar-desktop__league--all leagues-bar-desktop__league--active'
						: 'leagues-bar-desktop__league leagues-bar-desktop__league--all'
				}
			>
				<p className='leagues-bar-desktop__league-name'>All leagues</p>
			</div>
			{countries.map((countryEl, countryElId) => {
				return (
					<div
						className={
							country === countryEl.name
								? 'leagues-bar-desktop__country leagues-bar-desktop__country--active'
								: 'leagues-bar-desktop__country'
						}
						key={countryElId}
					>
						<div
							onClick={() => {
								if (countryEl.name === country) {
									setCountry('');
								} else {
									setCountry(countryEl.name);
								}
							}}
							className='leagues-bar-desktop__country-card'
						>
							<img
								className='leagues-bar-desktop__country-img'
								src={countryEl.flag}
								alt={`${countryEl.flag} flag`}
							/>
							<p className='leagues-bar-desktop__country-name'>
								{countryEl.name}
							</p>
							<RiArrowDownSLine className='icon' />
						</div>
						<div className='leagues-bar-desktop__leagues'>
							{leagues.map((league, leagueId) => {
								if (league.country === countryEl.name) {
									return (
										<div
											className={
												leagueName === league.name
													? 'leagues-bar-desktop__league leagues-bar-desktop__league--active'
													: 'leagues-bar-desktop__league'
											}
											onClick={() => {
												setLeagueName(league.name);
												setLeagueId(league.id);
											}}
											key={leagueId}
										>
											<div className='leagues-bar-desktop__league-img-box'>
												<img
													className='leagues-bar-desktop__league-img'
													src={league?.logo}
													alt={`${league?.name} logo`}
												/>
											</div>

											<p className='leagues-bar-desktop__league-name'>
												{league?.name}
											</p>
										</div>
									);
								} else return null;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
