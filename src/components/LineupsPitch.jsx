import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaTshirt } from 'react-icons/fa';

import '../styles/LineupsPitch.scss';

export default function LineupsPitch({ lineups }) {
	const navigate = useNavigate();

	const goalkeeperHomeName =
		lineups[0]?.startXI[0]?.player?.name.split(' ')[
			lineups[0]?.startXI[0]?.player?.name.split(' ').length - 1
		];
	const goalkeeperAwayName =
		lineups[1]?.startXI[0]?.player?.name.split(' ')[
			lineups[1]?.startXI[0]?.player?.name.split(' ').length - 1
		];

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
									<span
										onClick={() => {
											navigate(`/player/${lineups[0]?.startXI[0]?.player?.id}`);
										}}
									>
										{goalkeeperHomeName.substring(0, 10)}
										{goalkeeperHomeName !==
											goalkeeperHomeName.substring(0, 10) && '...'}
									</span>
								</div>
							</div>
						</div>
					</div>
					{lineups[0]?.formation.split('-').map((line, lineId) => {
						return (
							<div className='lineups-pitch__line' key={lineId}>
								{lineups[0]?.startXI.map((player, playerId) => {
									const playerName =
										player.player?.name.split(' ')[
											player.player?.name.split(' ').length - 1
										];
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
														<span
															onClick={() => {
																navigate(`/player/${player?.player?.id}`);
															}}
														>
															{playerName.substring(0, 10)}
															{playerName !== playerName.substring(0, 10) &&
																'...'}
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
									const playerName =
										player.player?.name.split(' ')[
											player.player?.name.split(' ').length - 1
										];
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
														<span
															onClick={() => {
																navigate(`/player/${player?.player?.id}`);
															}}
														>
															{playerName.substring(0, 10)}
															{playerName !== playerName.substring(0, 10) &&
																'...'}
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
									<span
										onClick={() => {
											navigate(`/player/${lineups[1]?.startXI[0]?.player?.id}`);
										}}
									>
										{goalkeeperAwayName.substring(0, 10)}
										{goalkeeperAwayName !==
											goalkeeperAwayName.substring(0, 10) && '...'}
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
				<div
					className='lineups-pitch__home'
					style={{
						gridTemplateColumns: `20% repeat(${
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
									<span
										onClick={() => {
											navigate(`/player/${lineups[0]?.startXI[0]?.player?.id}`);
										}}
									>
										{goalkeeperHomeName.substring(0, 10)}
										{goalkeeperHomeName !==
											goalkeeperHomeName.substring(0, 10) && '...'}
									</span>
								</div>
							</div>
						</div>
					</div>
					{lineups[0]?.formation.split('-').map((line, lineId) => {
						return (
							<div className='lineups-pitch__line' key={lineId}>
								{lineups[0]?.startXI.map((player, playerId) => {
									const playerName =
										player.player?.name.split(' ')[
											player.player?.name.split(' ').length - 1
										];
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
														<span
															onClick={() => {
																navigate(`/player/${player?.player?.id}`);
															}}
														>
															{playerName.substring(0, 10)}
															{playerName !== playerName.substring(0, 10) &&
																'...'}
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
						gridTemplateColumns: `repeat(${
							lineups[1]?.formation.split('-').length
						}, 1fr) 20%`,
					}}
				>
					{lineups[1]?.formation.split('-').map((line, lineId) => {
						return (
							<div className='lineups-pitch__line' key={lineId}>
								{lineups[1]?.startXI.map((player, playerId) => {
									const playerName =
										player.player?.name.split(' ')[
											player.player?.name.split(' ').length - 1
										];
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
														<span
															onClick={() => {
																navigate(`/player/${player?.player?.id}`);
															}}
														>
															{playerName.substring(0, 10)}
															{playerName !== playerName.substring(0, 10) &&
																'...'}
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
									<span
										onClick={() => {
											navigate(`/player/${lineups[1]?.startXI[0]?.player?.id}`);
										}}
									>
										{goalkeeperAwayName.substring(0, 10)}
										{goalkeeperAwayName !==
											goalkeeperAwayName.substring(0, 10) && '...'}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
