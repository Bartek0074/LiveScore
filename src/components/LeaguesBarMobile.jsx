import React, { useState } from 'react';

import { leagues } from '../utils/constants';

import { RiArrowDownSLine } from 'react-icons/ri';

import '../styles/LeaguesDropdownMenu.scss';

export default function LeaguesBarMobile({ setLeagueId }) {
	const [leagueName, setLeagueName] = useState('All leagues');
	const [leagueFlag, setLeagueFlag] = useState('');
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
					<div className='leagues-dropdown-menu__img-box'>
						<img
							className='leagues-dropdown-menu__img'
							src={leagueFlag}
							alt={`${leagueName} flag`}
						/>
					</div>
				) : null}
				<p className='leagues-dropdown-menu__name'>{leagueName}</p>
				<RiArrowDownSLine className='icon' />
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
							setLeagueId(league.id);
							setLeagueFlag(league.logo);
						}}
						value={league.name}
						className='leagues-dropdown-menu__element'
						key={id}
					>
						<div className='leagues-dropdown-menu__img-box'>
							<img
								className='leagues-dropdown-menu__img'
								src={league.logo}
								alt={`${league.name} logo`}
							/>
						</div>
						<p className='leagues-dropdown-menu__name'>{league.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
