import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { leagues } from '../utils/constants';

import { fetchFromAPI } from '../utils/fetchFromApi';

import '../styles/LeagueDetail.scss';

export default function LeagueDetail() {
	const { id } = useParams();

	const [seasons, setSeasons] = useState();
	const [season, setSeason] = useState();
	const [league, setLeague] = useState();

	useEffect(() => {
		fetchFromAPI(`/leagues?id=${id}`).then((data) => {
			setSeasons(data?.response[0]?.seasons.reverse());
      setSeason(data?.response[0]?.seasons[0].year)
		});
		const newLeague = leagues.find((leagueEl) => leagueEl?.id == id);
		setLeague(newLeague);
	}, []);

	// useEffect(() => {
	// 	season && setSeason(seasons[0]);
	// }, [seasons]);

	return (
		<div className='league-detail match-wrapper'>
			<div className='league-detail__header'>
				<div className='league-detail__logo-box'>
					<img className='league-detail__logo' src={league?.logo} alt='' />
				</div>
				<div className='league-detail__info'>
					<p className='league-detail__league-name'>{league?.name}</p>
					<div className='league-detail__country'>
						<img
							className='league-detail__country-flag'
							src={league?.flag}
							alt=''
						/>
						<p className='league-detail__country-name'>{league?.country}</p>
					</div>
					<select className='league-detail__season-select' name='' id=''>
						{seasons?.map((season, id) => {
							return (
								<option
									onClick={(e) => setSeason(e.target.value)}
									value={season?.year}
									key={id}
								>
									{season?.year}/{season?.year + 1}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<p>{season}</p>
		</div>
	);
}
