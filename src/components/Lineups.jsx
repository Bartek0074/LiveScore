import React from 'react';

import '../styles/Lineups.scss';
import LineupsPlayer from './LineupsPlayer';

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
									<LineupsPlayer
										player={player}
										playerDetail={playerDetail}
										home={true}
										match={match}
										key={playerId}
									/>
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
									<LineupsPlayer
										player={player}
										playerDetail={playerDetail}
										home={false}
										match={match}
										key={playerId}
									/>
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
									<LineupsPlayer
										player={player}
										playerDetail={playerDetail}
										home={true}
										match={match}
										key={playerId}
									/>
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
									<LineupsPlayer
										player={player}
										playerDetail={playerDetail}
										home={false}
										match={match}
										key={playerId}
									/>
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