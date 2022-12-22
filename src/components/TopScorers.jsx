import React from 'react';
import '../styles/TopScorers.scss';

export default function TopScorers({ topScorers }) {
	return (
		<div className='top-scorers'>
			<div className='top-scorers__player-header'>
				<div className='top-scorers__header-rank-box'>
					<span>#</span>
				</div>
				<div className='top-scorers__header-player'>
					<span>Player</span>
				</div>
				<div className='top-scorers__header-value-box'>
					<span className='top-scorers__header-goals'>G</span>
				</div>
				<div className='top-scorers__header-value-box'>
					<span>A</span>
				</div>
			</div>
			{topScorers.map((topScorer, topScorerId) => {
				return (
					<div className='top-scorers__player' key={topScorerId}>
						<div className='top-scorers__rank-box'>
							<span className='top-scorers__rank'>{topScorerId + 1}.</span>
						</div>
						<div className='top-scorers__image-box'>
							<img
								className='top-scorers__image'
								src={topScorer?.player?.photo}
								alt=''
								onError={({ currentTarget }) => {
									console.log('ff');
									currentTarget.onerror = null; // prevents looping
									currentTarget.src =
										'https://icon-library.com/images/generic-user-icon/generic-user-icon-1.jpg';
								}}
							/>
						</div>
						<div className='top-scorers__player-info'>
							<span className='top-scorers__player-name'>
								{topScorer?.player?.name}
							</span>
							<div className='top-scorers__club'>
								<span className='top-scorers__club-name'>
									{topScorer?.statistics[0]?.team?.name}
								</span>
								<img
									className='top-scorers__club-image'
									src={topScorer?.statistics[0]?.team?.logo}
									alt={`${topScorer?.statistics[0]?.team?.name} logo`}
								/>
							</div>
						</div>

						<div className='top-scorers__value-box'>
							<span className='top-scorers__goals'>
								{topScorer?.statistics[0]?.goals?.total}
							</span>
						</div>
						<div className='top-scorers__value-box'>
							<span className='top-assists'>
								{topScorer?.statistics[0]?.goals?.assists
									? topScorer?.statistics[0]?.goals?.assists
									: '0'}
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}
