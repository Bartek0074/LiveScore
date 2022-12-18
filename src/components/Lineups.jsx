import React from 'react';

import '../styles/Lineups.scss';

export default function Lineups({ match }) {
	return (
		<div className='lineups'>
			{match.lineups[0] ? (
				<>
					<div className='lineups__formation'>
						<p>{match?.lineups[0]?.formation}</p>
						<p>Formation</p>
						<p>{match?.lineups[1]?.formation}</p>
					</div>

					<div className='lineups__starting-lineups-title'>
						<p>starting lineups</p>
					</div>

					<div className='lineups__starting-lineups'>
						<div className='lineups__home'>
							{match?.lineups[0]?.startXI.map((player, playerId) => {
								const playerDetail = match?.players[0]?.players.filter(
									(filteredPlayer) => {
										return player?.player?.id == filteredPlayer.player.id;
									}
								)[0];
								return (
									<div className='lineups__player' key={playerId}>
										<div className='lineups__player-number-box'>
											<span className='lineups__player-number'>
												{player?.player?.number}
											</span>
										</div>
										<span className='lineups__player-name'>
											{player?.player?.name}
										</span>
										{playerDetail?.statistics[0]?.games?.position === 'G' && (
											<span className='lineups__goalkeeper'>(G)</span>
										)}

										{playerDetail?.statistics[0]?.games?.captain && (
											<span className='lineups__goalkeeper'>(C)</span>
										)}
									</div>
								);
							})}
						</div>

						<div className='lineups__away'>
							{match?.lineups[1]?.startXI.map((player, playerId) => {
								const playerDetail = match?.players[1]?.players.filter(
									(filteredPlayer) => {
										return player?.player?.id == filteredPlayer.player.id;
									}
								)[0];
								return (
									<div className='lineups__player' key={playerId}>
										<div className='lineups__player-number-box'>
											<span className='lineups__player-number'>
												{player?.player?.number}
											</span>
										</div>
										<span className='lineups__player-name'>
											{player?.player?.name}
										</span>
										{playerDetail?.statistics[0]?.games?.position === 'G' && (
											<span className='lineups__goalkeeper'>(G)</span>
										)}

										{playerDetail?.statistics[0]?.games?.captain && (
											<span className='lineups__goalkeeper'>(C)</span>
										)}
									</div>
								);
							})}
						</div>
					</div>

					<div className='lineups__substitutes-title'>
						<p>substitutes</p>
					</div>

					<div className='lineups__substitutes'>
						<div className='lineups__home'>
							{match?.lineups[0]?.substitutes.map((player, playerId) => {
								const playerDetail = match?.players[0]?.players.filter(
									(filteredPlayer) => {
										return player?.player?.id == filteredPlayer.player.id;
									}
								)[0];
								return (
									<div className='lineups__player' key={playerId}>
										<div className='lineups__player-number-box'>
											<span className='lineups__player-number'>
												{player?.player?.number}
											</span>
										</div>
										<span className='lineups__player-name'>
											{player?.player?.name}
										</span>
										{playerDetail?.statistics[0]?.games?.position === 'G' && (
											<span className='lineups__goalkeeper'>(G)</span>
										)}

										{playerDetail?.statistics[0]?.games?.captain && (
											<span className='lineups__goalkeeper'>(C)</span>
										)}
									</div>
								);
							})}
						</div>

						<div className='lineups__away'>
							{match?.lineups[1]?.substitutes.map((player, playerId) => {
								const playerDetail = match?.players[1]?.players.filter(
									(filteredPlayer) => {
										return player?.player?.id == filteredPlayer.player.id;
									}
								)[0];
								return (
									<div className='lineups__player' key={playerId}>
										<div className='lineups__player-number-box'>
											<span className='lineups__player-number'>
												{player?.player?.number}
											</span>
										</div>
										<span className='lineups__player-name'>
											{player?.player?.name}
										</span>
										{playerDetail?.statistics[0]?.games?.position === 'G' && (
											<span className='lineups__goalkeeper'>(G)</span>
										)}

										{playerDetail?.statistics[0]?.games?.captain && (
											<span className='lineups__goalkeeper'>(C)</span>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</>
			) : (
				<p>No lineups for this match</p>
			)}
		</div>
	);
}
