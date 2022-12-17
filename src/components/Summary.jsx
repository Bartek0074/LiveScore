import React from 'react';

import { BiRefresh, BiFootball } from 'react-icons/bi';
import { IoMdWarning } from 'react-icons/io';

import '../styles/Summary.scss';

export default function Summary({ match }) {
	return (
		<div className='summary'>
			{match?.events.map((eventEl, id) => {
				console.log(eventEl);
				return (
					<div
						key={id}
						className={
							eventEl?.team?.name === match?.teams?.home?.name
								? 'summary__element summary__element--home'
								: 'summary__element summary__element--away'
						}
					>
						<span className='summary__minute'>{eventEl?.time?.elapsed}'</span>

						{eventEl?.detail === 'Normal Goal' && (
							<div className='summary__icon'>
								<BiFootball className='icon icon--goal' />
							</div>
						)}
						{eventEl?.detail === 'Own Goal' && (
							<div className='summary__icon'>
								<BiFootball className='icon icon--own-goal' />
							</div>
						)}
						{eventEl?.detail === 'Penalty' && (
							<div className='summary__icon'>
								<BiFootball className='icon icon--goal' />
							</div>
						)}
						{eventEl?.detail === 'Yellow Card' && (
							<div className='summary__icon'>
								<div className='card-icon card-icon--yellow'></div>
							</div>
						)}
						{eventEl?.detail === 'Red Card' && (
							<div className='summary__icon'>
								<div className='card-icon card-icon--red'></div>
							</div>
						)}
						{eventEl?.type === 'subst' && (
							<div className='summary__icon'>
								<BiRefresh className='icon icon--subst' />
							</div>
						)}
						{eventEl?.type === 'Var' && (
							<div className='summary__icon'>
								<div className='var-icon'>VAR</div>
							</div>
						)}
						{eventEl?.detail === 'Missed Penalty' && (
							<div className='summary__icon'>
								<IoMdWarning className='icon icon--warn' />
							</div>
						)}

						<span className='summary__player'>{eventEl?.player?.name}</span>

						{eventEl?.assist?.name && eventEl?.detail !== 'Missed Penalty' && (
							<span className='summary__assist'>{eventEl?.assist?.name}</span>
						)}

						{eventEl?.comments && (
							<span className='summary__comment'>({eventEl?.comments})</span>
						)}

						{eventEl?.detail === 'Own Goal' && (
							<span className='summary__comment'>(Own goal)</span>
						)}
						{eventEl?.detail === 'Penalty' && (
							<span className='summary__comment'>(Penalty)</span>
						)}
						{eventEl?.type === 'Var' && (
							<span className='summary__comment'>({eventEl?.detail})</span>
						)}
						{eventEl?.detail === 'Missed Penalty' && (
							<span className='summary__comment'>(Penalty missed)</span>
						)}
					</div>
				);
			})}
		</div>
	);
}
