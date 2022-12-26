import React from 'react';

import { FaTshirt } from 'react-icons/fa';

import '../styles/LineupsPitch.scss';

export default function LineupsPitch({ lineups }) {
	console.log(lineups[0]?.startXI[2]?.player);
	return (
		<>
			<div className='lineups-pitch__mobile'>
				<div
					className='lineups-pitch__background'
					style={{
						backgroundImage:
							'url(https://upload.wikimedia.org/wikipedia/commons/9/90/Football_pitch.svg)',
					}}
				></div>
				<div
					className='lineups-pitch__home'
					style={{
						gridTemplateRows: `25% repeat(${
							lineups[0]?.formation.split('-').length
						}, 1fr)`,
					}}
				>
					<div className='lineups-pitch__line'>
						<div className='lineups-pitch__player'>
							<div className='lineups-pitch__jersey'>
								<FaTshirt
									className='icon'
									style={{
										color: `#${lineups[0]?.team?.colors?.goalkeeper?.primary}`,
									}}
								/>
								<span
									className='lineups-pitch__player-number'
									style={{
										color: `#${lineups[0]?.team?.colors?.goalkeeper?.number}`,
									}}
								>
									{lineups[0]?.startXI[0]?.player?.number}
								</span>
							</div>
							<div className='lineups-pitch__player-name-box'>
								<div className='lineups-pitch__player-name'>
									<span>
										{lineups[0]?.startXI[0]?.player?.name.substring(0, 10)}
										{lineups[0]?.startXI[0]?.player?.name !==
											lineups[0]?.startXI[0]?.player?.name.substring(0, 10) &&
											'...'}
									</span>
								</div>
							</div>
						</div>
					</div>
					{lineups[0]?.formation.split('-').map((line, lineId) => {
						return (
							<div className='lineups-pitch__line' key={lineId}>
								{lineups[0]?.startXI.map((player, playerId) => {
									if (player?.player?.grid.startsWith(lineId + 2)) {
										return (
											<div className='lineups-pitch__player' key={playerId}>
												<div className='lineups-pitch__jersey'>
													<FaTshirt
														className='icon'
														style={{
															color: `#${lineups[0]?.team?.colors?.player?.primary}`,
														}}
													/>
													<span
														className='lineups-pitch__player-number'
														style={{
															color: `#${lineups[0]?.team?.colors?.player?.number}`,
														}}
													>
														{player?.player?.number}
													</span>
												</div>
												<div className='lineups-pitch__player-name-box'>
													<div className='lineups-pitch__player-name'>
														<span>
															{player?.player?.name.substring(0, 10)}
															{player?.player?.name !==
																player?.player?.name.substring(0, 10) && '...'}
														</span>
													</div>
												</div>
											</div>
										);
									} else return null;
								})}
							</div>
						);
					})}
				</div>

				<div
					className='lineups-pitch__away'
					style={{
						gridTemplateRows: `repeat(${
							lineups[1]?.formation.split('-').length
						}, 1fr) 25%`,
					}}
				>
					{lineups[1]?.formation.split('-').map((line, lineId) => {
						return (
							<div className='lineups-pitch__line' key={lineId}>
								{lineups[1]?.startXI.map((player, playerId) => {
									if (
										player?.player?.grid.startsWith(
											lineups[1]?.formation.split('-').length - lineId + 1
										)
									) {
										return (
											<div className='lineups-pitch__player' key={playerId}>
												<div className='lineups-pitch__jersey'>
													<FaTshirt
														className='icon'
														style={{
															color: `#${lineups[1]?.team?.colors?.player?.primary}`,
														}}
													/>
													<span
														className='lineups-pitch__player-number'
														style={{
															color: `#${lineups[1]?.team?.colors?.player?.number}`,
														}}
													>
														{player?.player?.number}
													</span>
												</div>
												<div className='lineups-pitch__player-name-box'>
													<div className='lineups-pitch__player-name'>
														<span>
															{player?.player?.name.substring(0, 10)}
															{player?.player?.name !==
																player?.player?.name.substring(0, 10) && '...'}
														</span>
													</div>
												</div>
											</div>
										);
									} else return null;
								})}
							</div>
						);
					})}
					<div className='lineups-pitch__line'>
						<div className='lineups-pitch__player'>
							<div className='lineups-pitch__jersey'>
								<FaTshirt
									className='icon'
									style={{
										color: `#${lineups[1]?.team?.colors?.goalkeeper?.primary}`,
									}}
								/>
								<span
									className='lineups-pitch__player-number'
									style={{
										color: `#${lineups[1]?.team?.colors?.goalkeeper?.number}`,
									}}
								>
									{lineups[1]?.startXI[0]?.player?.number}
								</span>
							</div>
							<div className='lineups-pitch__player-name-box'>
								<div className='lineups-pitch__player-name'>
									<span>
										{lineups[1]?.startXI[0]?.player?.name.substring(0, 10)}
										{lineups[1]?.startXI[0]?.player?.name !==
											lineups[1]?.startXI[0]?.player?.name.substring(0, 10) &&
											'...'}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='lineups-pitch__desktop'>
				<div
					className='lineups-pitch__background'
					style={{
						backgroundImage:
							'url(https://upload.wikimedia.org/wikipedia/commons/9/90/Football_pitch.svg)',
					}}
				></div>
			</div>
		</>
	);
}
