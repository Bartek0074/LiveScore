import React, { useState } from 'react';

import { leagues } from '../utils/constants';

import { RiArrowDownSLine } from 'react-icons/ri';

import '../styles/LeaguesDropdownMenu.scss';

export default function LeaguesBarMobile({ setLeagueId }) {
	const [leagueName, setLeagueName] = useState('All leagues');
	const [leagueFlag, setLeagueFlag] = useState('');
	const [countryName, setCountryName] = useState('');
	const [countryFlag, setCountryFlag] = useState('');
	const [open, setOpen] = useState(false);

	return (
		<div className='leagues-dropdown-menu'>
			<div
				onClick={() => {
					setOpen(!open);
				}}
				className='leagues-dropdown-menu__trigger'
			>
				{leagueFlag ? (
					<div className='leagues-dropdown-menu__flag-box'>
						<img
							className='leagues-dropdown-menu__flag'
							src={countryFlag}
							alt={`${countryName} flag`}
						/>
					</div>
				) : null}
				<p className='leagues-dropdown-menu__name'>{leagueName}</p>
				{leagueFlag ? (
					<div className='leagues-dropdown-menu__logo-box'>
						<img
							className='leagues-dropdown-menu__logo'
							src={leagueFlag}
							alt={`${leagueName} logo`}
						/>
					</div>
				) : null}
				<RiArrowDownSLine
					className={`icon ${
						leagueName === 'All leagues' && 'icon--margin-left'
					}`}
				/>
			</div>
			<div
				className={`leagues-dropdown-menu__menu ${
					open
						? 'leagues-dropdown-menu__menu--active'
						: 'leagues-dropdown-menu__menu--inactive'
				}`}
			>
				<div
					onClick={() => {
						setOpen(!open);
						setLeagueName('All leagues');
						setLeagueId('all');
						setLeagueFlag('');
					}}
					className='leagues-dropdown-menu__element'
				>
					<p className='leagues-dropdown-menu__name'>All leagues</p>
				</div>
				{leagues.map((league, id) => (
					<div
						onClick={() => {
							setOpen(!open);
							setLeagueName(league.name);
							setLeagueFlag(league.logo);
							setCountryName(league.country);
							setCountryFlag(league.flag);
							setLeagueId(league.id);
						}}
						value={league.name}
						className='leagues-dropdown-menu__element'
						key={id}
					>
						<div className='leagues-dropdown-menu__flag-box'>
							<img
								className='leagues-dropdown-menu__flag'
								src={league.flag}
								alt={`${league.country} flag`}
							/>
						</div>
						<p className='leagues-dropdown-menu__name'>{league.name}</p>
						<div className='leagues-dropdown-menu__logo-box'>
							<img
								className='leagues-dropdown-menu__logo'
								src={league.logo}
								alt={`${league.name} logo`}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
