import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { countries } from '../utils/countries.js';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { getDateWithoutHour } from '../utils/getDateWithoutHour.js';

import '../styles/PlayerDetail.scss';

export default function PlayerDetail() {
	const { id } = useParams();

	const [seasons, setSeasons] = useState();
	const [season, setSeason] = useState();
	const [nationalityFlag, setNationalityFlag] = useState();
	const [birthFlag, setBirthFlag] = useState();
	const [player, setPlayer] = useState();

	useEffect(() => {
		fetchFromAPI(`/players/seasons?player=${id}`).then((data) => {
			setSeasons(data?.response.reverse());
			setSeason(data?.response[0]);
		});
	}, [id]);

	useEffect(() => {
		fetchFromAPI(`/players?id=${id}&season=${season}`).then((data) => {
			setPlayer(data?.response[0]);
		});
	}, [season]);

	useEffect(() => {
		const newNationalityFlag = countries.find(
			(country) => country?.name === player?.player?.nationality
		);
		setNationalityFlag(newNationalityFlag?.flag);
		const newBirthFlag = countries.find(
			(country) => country?.name === player?.player?.birth?.country
		);
		setBirthFlag(newBirthFlag?.flag);
	}, [player]);

	console.log(player?.statistics[0]?.team?.name);
	return (
		<div className='player-detail match-wrapper'>
			<div className='player-detail__header'>
				<div className='player-detail__image-box'>
					<img
						className='player-detail__image'
						src={player?.player?.photo}
						alt=''
					/>
				</div>
				<div className='player-detail__info'>
					<p className='player-detail__player-name'>
						{player?.player?.firstname} {player?.player?.lastname}
					</p>
					<div className='player-detail__club'>
						<img
							className='player-detail__club-flag'
							src={player?.statistics[0]?.team?.logo}
							alt={`${player?.statistics[0]?.team?.name} logo`}
						/>
						<p className='player-detail__club-name'>
							{player?.statistics[0]?.team?.name}
						</p>
					</div>
					<select
						className='player-detail__season-select'
						name=''
						id=''
						onChange={(e) => setSeason(e.target.value)}
					>
						{seasons?.map((season, id) => {
							return (
								<option value={season} key={id}>
									{season}/{season + 1}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className='player-detail__more-info'>
				<div className='player-detail__more-info-element'>
					<div className='player-detail__more-info-label'>
						<span>Nationality:</span>
					</div>
					<div className='player-detail__more-info-value'>
						<img
							src={nationalityFlag}
							alt={`${player?.player?.nationality} flag`}
						/>
						<span>{player?.player?.nationality}</span>
					</div>
				</div>
				<div className='player-detail__more-info-element'>
					<div className='player-detail__more-info-label'>
						<span>Place of birth:</span>
					</div>
					<div className='player-detail__more-info-value'>
						<img
							src={birthFlag}
							alt={`${player?.player?.birth?.country} flag`}
						/>
						<span>
							{player?.player?.birth?.place
								? player?.player?.birth?.place
								: player?.player?.birth?.country}
						</span>
					</div>
				</div>
				<div className='player-detail__more-info-element'>
					<div className='player-detail__more-info-label'>
						<span>Date of birth:</span>
					</div>
					<div className='player-detail__more-info-value'>
						<span>{getDateWithoutHour(player?.player?.birth?.date)}</span>
					</div>
				</div>
				<div className='player-detail__more-info-element'>
					<div className='player-detail__more-info-label'>
						<span>Age:</span>
					</div>
					<div className='player-detail__more-info-value'>
						<span>{player?.player?.age} years</span>
					</div>
				</div>
				{player?.player?.height && (
					<div className='player-detail__more-info-element'>
						<div className='player-detail__more-info-label'>
							<span>Height:</span>
						</div>
						<div className='player-detail__more-info-value'>
							<span>{player?.player?.height}</span>
						</div>
					</div>
				)}

				{player?.player?.weight && (
					<div className='player-detail__more-info-element'>
						<div className='player-detail__more-info-label'>
							<span>Weight:</span>
						</div>
						<div className='player-detail__more-info-value'>
							<span>{player?.player?.weight}</span>
						</div>
					</div>
				)}
			</div>
			<p>Player: {player?.player?.name}</p>
			<p>Id: {player?.player?.id}</p>
			<p>Season: {player?.statistics[0]?.league?.season}</p>
		</div>
	);
}
