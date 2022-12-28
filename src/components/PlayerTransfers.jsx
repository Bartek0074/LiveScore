import React from 'react';

import { getDateWithoutHour } from '../utils/getDateWithoutHour';

import '../styles/PlayerTransfers.scss';

export default function PlayerTransfers({ transfers }) {
	console.log(transfers);
	return (
		<div className='player-transfers'>
			{transfers ? (
				<>
					<div className='player-transfers__element-header'>
						<div className='player-transfers__value-box'>
							<span>Date</span>
						</div>
						<div className='player-transfers__value-box'>
							<span>From</span>
						</div>
						<div className='player-transfers__value-box'>
							<span>Value/Type</span>
						</div>
						<div className='player-transfers__value-box'>
							<span>To</span>
						</div>
					</div>

					{transfers.map((transfer, transferId) => {
						console.log(transfer?.type);
						return (
							<div className='player-transfers__element' key={transferId}>
								<div className='player-transfers__value-box'>
									<span>{getDateWithoutHour(transfer?.date).substring(0,6)}</span>
									<span>{getDateWithoutHour(transfer?.date).substring(6)}</span>
								</div>
								<div className='player-transfers__value-box'>
									<img
										className='player-transfers__logo'
										src={
											transfer?.teams?.out?.logo
												? transfer?.teams?.out?.logo
												: 'https://media.api-sports.io/football/teams/5276.png'
										}
										alt={`${transfer?.teams?.out?.name} logo`}
									/>
									<span>
										{transfer?.teams?.out?.name
											? transfer?.teams?.out?.name
											: 'unknown'}
									</span>{' '}
								</div>
								<div className='player-transfers__value-box'>
									<span>{transfer?.type === 'N/A' ? '?' : transfer?.type}</span>
								</div>
								<div className='player-transfers__value-box'>
									<img
										className='player-transfers__logo'
										src={
											transfer?.teams?.in?.logo
												? transfer?.teams?.in?.logo
												: 'https://media.api-sports.io/football/teams/5276.png'
										}
										alt={`${transfer?.teams?.in?.name} logo`}
									/>
									<span>
										{transfer?.teams?.in?.name
											? transfer?.teams?.in?.name
											: 'unknown'}
									</span>{' '}
								</div>
							</div>
						);
					})}
				</>
			) : (
				<div className='player-transfers__no-transfers-info'>
					<p>No transfers yet!</p>
				</div>
			)}
		</div>
	);
}
