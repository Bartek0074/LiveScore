import React, { useState, useEffect } from 'react';

import '../styles/StandingsTable.scss';

export default function StandingsTable({ standings, standingId }) {
	const [standingsDescriptions, setStandingsDescriptions] = useState([]);

	useEffect(() => {
		let newStandingsDescriptions = [];

		standings?.league?.standings[standingId].forEach((standing) => {
			if (
				standing.description &&
				!newStandingsDescriptions.includes(standing.description)
			) {
				newStandingsDescriptions.push(standing.description);
			}
			setStandingsDescriptions(newStandingsDescriptions);
		});
	}, [standings, standingId]);

	return (
		<div className='standings'>
			{standings?.league?.standings?.length !== 1 &&<div className='standings__round'>
				<span className='standings__round-name'>
					{standings?.league?.standings[standingId][0]?.group}
				</span>
			</div>}
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
				{standings?.league?.standings[standingId].map(
					(standingsEl, standingsElId) => {
						return (
							<div className='standings__element' key={standingsElId}>
								{standingsEl?.description === standingsDescriptions[0] && (
									<div className={'standings__rank standings__rank--first'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === standingsDescriptions[1] && (
									<div className={'standings__rank standings__rank--second'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === standingsDescriptions[2] && (
									<div className={'standings__rank standings__rank--third'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === standingsDescriptions[3] && (
									<div className={'standings__rank standings__rank--fourth'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === standingsDescriptions[4] && (
									<div className={'standings__rank standings__rank--fifth'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === standingsDescriptions[5] && (
									<div className={'standings__rank standings__rank--sixth'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === null && (
									<div className={'standings__rank'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
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
				{standings?.league?.standings[standingId].map(
					(standingsEl, standingsElId) => {
						return (
							<div className='standings__element' key={standingsElId}>
								{standingsEl?.description === standingsDescriptions[0] && (
									<div className={'standings__rank standings__rank--first'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === standingsDescriptions[1] && (
									<div className={'standings__rank standings__rank--second'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === standingsDescriptions[2] && (
									<div className={'standings__rank standings__rank--third'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === standingsDescriptions[3] && (
									<div className={'standings__rank standings__rank--fourth'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === standingsDescriptions[4] && (
									<div className={'standings__rank standings__rank--fifth'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === standingsDescriptions[5] && (
									<div className={'standings__rank standings__rank--sixth'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
								{standingsEl?.description === null && (
									<div className={'standings__rank'}>
										<span>{standingsEl?.rank}.</span>
									</div>
								)}
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
									} else return null;
								})}
							</div>
						);
					}
				)}
			</div>
			<div className='standings__legend'>
				{standingsDescriptions.map((description, descriptionId) => {
					if (description === standingsDescriptions[0]) {
						return (
							<div className='standings__legend-element' key={descriptionId}>
								<div className='standings__legend-square standings__legend-square--first'></div>
								<p className='standings__legend-label'>{description}</p>
							</div>
						);
					} else if (description === standingsDescriptions[1]) {
						return (
							<div className='standings__legend-element' key={descriptionId}>
								<div className='standings__legend-square standings__legend-square--second'></div>
								<p className='standings__legend-label'>{description}</p>
							</div>
						);
					} else if (description === standingsDescriptions[2]) {
						return (
							<div className='standings__legend-element' key={descriptionId}>
								<div className='standings__legend-square standings__legend-square--third'></div>
								<p className='standings__legend-label'>{description}</p>
							</div>
						);
					} else if (description === standingsDescriptions[3]) {
						return (
							<div className='standings__legend-element' key={descriptionId}>
								<div className='standings__legend-square standings__legend-square--fourth'></div>
								<p className='standings__legend-label'>{description}</p>
							</div>
						);
					} else if (description === standingsDescriptions[4]) {
						return (
							<div className='standings__legend-element' key={descriptionId}>
								<div className='standings__legend-square standings__legend-square--fifth'></div>
								<p className='standings__legend-label'>{description}</p>
							</div>
						);
					} else if (description === standingsDescriptions[5]) {
						return (
							<div className='standings__legend-element' key={descriptionId}>
								<div className='standings__legend-square standings__legend-square--sixth'></div>
								<p className='standings__legend-label'>{description}</p>
							</div>
						);
					} else return null;
				})}
			</div>
		</div>
	);
}
