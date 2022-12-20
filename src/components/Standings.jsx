import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { standings } from '../utils/standings';
import '../styles/Standings.scss';

export default function Standings() {
	const { id } = useParams();
	// const [standings, setStandings] = useState([]);
	// useEffect(() => {
	// 	fetchFromAPI(`/standings?league=${id}&season=2022`).then(
	// 		(data) => {
	// 			// setStandings(data.response);
	// 			console.log(data);
	// 		}
	// 	);
	// }, [id]);
	console.log(standings?.response[0]);
	return (
		<div className='standings match-wrapper'>
			<div className='standings__header'>
				<img
					src={standings?.response[0]?.league?.logo}
					alt={`${standings?.response[0]?.league?.name} logo`}
					className='standings__league-logo'
				/>
				<p className='standings__league-name'>
					{standings?.response[0]?.league?.name}
				</p>

				<p className='standings__season'>
					{standings?.response[0]?.league?.season}/
					{standings?.response[0]?.league?.season + 1}
				</p>
			</div>
			<div className='standings__box standings__box--mobile'>
				<div className='standings__element standings__element-header'>
					<div className='standings__rank'>
						<span>#</span>
					</div>
					<span className='standings__team-name'>TEAM</span>
					<div className='standings__value-box'>
						<span className='standings__match-played'>M</span>
					</div>
					<div className='standings__value-box'>
						<span className='standings__goals'>G</span>
					</div>
					<div className='standings__value-box'>
						<span className='standings__match-points'>P</span>
					</div>
				</div>
				{standings.response[0].league.standings[0].map(
					(standingsEl, standingsElId) => {
						return (
							<div className='standings__element' key={standingsElId}>
								<div className='standings__rank'>
									<span>{standingsEl?.rank}.</span>
								</div>
								<div className='standings__team-logo'>
									<img src={standingsEl?.team?.logo} alt='' />
								</div>
								<span className='standings__team-name'>
									{standingsEl?.team?.name}
								</span>
								<div className='standings__value-box'>
									<span className='standings__match-played'>
										{standingsEl?.all?.played}
									</span>
								</div>
								<div className='standings__value-box'>
									<span className='standings__goals'>
										{standingsEl?.all?.goals?.for}:
										{standingsEl?.all?.goals?.against}
									</span>
								</div>
								<div className='standings__value-box'>
									<span className='standings__match-points'>
										{standingsEl?.points}
									</span>
								</div>
							</div>
						);
					}
				)}
			</div>
			<div className='standings__box standings__box--desktop'>
				<div className='standings__element standings__element-header'>
					<div className='standings__rank'>
						<span>#</span>
					</div>
					<span className='standings__team-name'>TEAM</span>
					<div className='standings__value-box'>
						<span>M</span>
					</div>
					<div className='standings__value-box'>
						<span>W</span>
					</div>
					<div className='standings__value-box'>
						<span>D</span>
					</div>
					<div className='standings__value-box'>
						<span>L</span>
					</div>
					<div className='standings__value-box'>
						<span>G</span>
					</div>
					<div className='standings__value-box'>
						<span className='standings__match-points'>P</span>
					</div>
					<div className='standings__form-match-label'>
						<span>FORM</span>
					</div>
				</div>
				{standings.response[0].league.standings[0].map(
					(standingsEl, standingsElId) => {
						return (
							<div className='standings__element' key={standingsElId}>
								<div className='standings__rank'>
									<span>{standingsEl?.rank}.</span>
								</div>
								<div className='standings__team-logo'>
									<img src={standingsEl?.team?.logo} alt='' />
								</div>
								<span className='standings__team-name'>
									{standingsEl?.team?.name}
								</span>
								<div className='standings__value-box'>
									<span>{standingsEl?.all?.played}</span>
								</div>
								<div className='standings__value-box'>
									<span>{standingsEl?.all?.win}</span>
								</div>
								<div className='standings__value-box'>
									<span>{standingsEl?.all?.draw}</span>
								</div>
								<div className='standings__value-box'>
									<span>{standingsEl?.all?.lose}</span>
								</div>
								<div className='standings__value-box'>
									<span>
										{standingsEl?.all?.goals?.for}:
										{standingsEl?.all?.goals?.against}
									</span>
								</div>
								<div className='standings__value-box'>
									<span className='standings__match-points'>
										{standingsEl?.points}
									</span>
								</div>
								{standingsEl.form.split('').map((formMatch, formMatchId) => {
									if (formMatch === 'W') {
										return (
											<div
												className='standings__form-match standings__form-match--won'
												key={formMatchId}
											>
												<span>{formMatch}</span>
											</div>
										);
									} else if (formMatch === 'D') {
										return (
											<div
												className='standings__form-match standings__form-match--draw'
												key={formMatchId}
											>
												<span>{formMatch}</span>
											</div>
										);
									} else if (formMatch === 'L') {
										return (
											<div
												className='standings__form-match standings__form-match--loss'
												key={formMatchId}
											>
												<span>{formMatch}</span>
											</div>
										);
									}
								})}
							</div>
						);
					}
				)}
			</div>
		</div>
	);
}
