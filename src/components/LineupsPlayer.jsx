import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BiRefresh, BiFootball } from 'react-icons/bi';

import '../styles/LineupsPlayer.scss';

export default function LineupsPlayer({ player, playerDetail, match, home }) {
	const navigate = useNavigate();

	return (
		<div
			className={
				home ? 'lineups-player' : 'lineups-player lineups-player--away'
			}
		>
			<div className='lineups-player__number-box'>
				<span className='lineups-player__number'>{player?.player?.number}</span>
			</div>
			<span
				onClick={() => {
					navigate(`/player/${player?.player?.id}`);
				}}
				className='lineups-player__name'
			>
				{player?.player?.name}
			</span>
			{playerDetail?.statistics[0]?.games?.position === 'G' && (
				<span className='lineups-player__goalkeeper'>(G)</span>
			)}

			{playerDetail?.statistics[0]?.games?.captain && (
				<span className='lineups-player__captain'>(C)</span>
			)}
			{playerDetail?.statistics[0]?.cards?.red === 0 &&
				playerDetail?.statistics[0]?.cards?.yellow === 1 && (
					<div className='lineups-player__icon'>
						<div className='card-icon card-icon--yellow'></div>
					</div>
				)}
			{playerDetail?.statistics[0]?.cards?.red === 1 &&
				playerDetail?.statistics[0]?.cards?.yellow === 2 && (
					<>
						<div className='lineups-player__icon'>
							<div className='card-icon card-icon--yellow'></div>
						</div>
						<div className='lineups-player__icon'>
							<div className='card-icon card-icon--second-yellow'></div>
						</div>
					</>
				)}
			{playerDetail?.statistics[0]?.cards?.red === 1 &&
				playerDetail?.statistics[0]?.cards?.yellow === 0 && (
					<div className='lineups-player__icon'>
						<div className='card-icon card-icon--red'></div>
					</div>
				)}

			{playerDetail?.statistics[0]?.cards?.red === 1 &&
				playerDetail?.statistics[0]?.cards?.yellow === 1 && (
					<>
						<div className='lineups-player__icon'>
							<div className='card-icon card-icon--yellow'></div>
						</div>
						<div className='lineups-player__icon'>
							<div className='card-icon card-icon--red'></div>
						</div>
					</>
				)}
			{playerDetail?.statistics[0]?.goals?.total && (
				<div className='lineups-player__icon'>
					<BiFootball className='icon icon--goal' />
					{playerDetail?.statistics[0]?.goals?.total > 1 && (
						<span className='icon--goal-number'>
							X{playerDetail?.statistics[0]?.goals?.total}
						</span>
					)}
				</div>
			)}
			{match?.events.map((eventEl, eventElId) => {
				if (
					eventEl?.type === 'subst' &&
					eventEl?.player?.id === player?.player?.id
				) {
					return (
						<>
							<div className='lineups-player__icon'>
								<BiRefresh className='icon icon--subst' />
							</div>
							<span
								onClick={() => {
									navigate(`/player/${eventEl?.assist?.id}`);
								}}
								className='lineups-player__subst-name'
							>
								(<span>{eventEl?.assist?.name}</span>)
							</span>
						</>
					);
				} else if (
					eventEl?.type === 'subst' &&
					eventEl?.assist?.id === player?.player?.id
				) {
					return (
						<>
							<div className='lineups-player__icon'>
								<BiRefresh className='icon icon--subst' />
							</div>
							<span
								onClick={() => {
									navigate(`/player/${eventEl?.player?.id}`);
								}}
								className='lineups-player__subst-name'
							>
								(<span>{eventEl?.player?.name}</span>)
							</span>
						</>
					);
				} else return null;
			})}
		</div>
	);
}
