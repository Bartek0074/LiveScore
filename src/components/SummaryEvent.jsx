import React from 'react';

import { BiRefresh, BiFootball } from 'react-icons/bi';
import { IoMdWarning } from 'react-icons/io';

import '../styles/SummaryEvent.scss';

export default function SummaryEvent({ match, eventEl }) {
	return (
		<div
			className={
				eventEl?.team?.name === match?.teams?.home?.name
					? 'summary-event summary-event--home'
					: 'summary-event summary-event--away'
			}
		>
			{eventEl?.comments !== 'Penalty Shootout' && (
				<div className='summary-event__minute-box'>
					<span className='summary-event__minute'>
						{eventEl?.time?.elapsed}
						{eventEl?.time?.extra && `+${eventEl?.time?.extra}`}'
					</span>
				</div>
			)}

			{eventEl?.detail === 'Normal Goal' && (
				<div className='summary-event__icon'>
					<BiFootball className='icon icon--goal' />
				</div>
			)}
			{eventEl?.detail === 'Own Goal' && (
				<div className='summary-event__icon'>
					<BiFootball className='icon icon--own-goal' />
				</div>
			)}
			{eventEl?.detail === 'Penalty' && (
				<div className='summary-event__icon'>
					<BiFootball className='icon icon--goal' />
				</div>
			)}
			{eventEl?.detail === 'Yellow Card' && (
				<div className='summary-event__icon'>
					<div className='card-icon card-icon--yellow'></div>
				</div>
			)}
			{eventEl?.detail === 'Red Card' && (
				<div className='summary-event__icon'>
					<div className='card-icon card-icon--red'></div>
				</div>
			)}
			{eventEl?.type === 'subst' && (
				<div className='summary-event__icon'>
					<BiRefresh className='icon icon--subst' />
				</div>
			)}
			{eventEl?.type === 'Var' && (
				<div className='summary-event__icon'>
					<div className='var-icon'>VAR</div>
				</div>
			)}
			{eventEl?.detail === 'Missed Penalty' && (
				<div className='summary-event__icon'>
					<IoMdWarning className='icon icon--warn' />
				</div>
			)}

			<span className='summary-event__player'>{eventEl?.player?.name}</span>

			{eventEl?.assist?.name && eventEl?.detail !== 'Missed Penalty' && (
				<span className='summary-event__assist'>{eventEl?.assist?.name}</span>
			)}

			{eventEl?.comments && eventEl?.comments !== 'Penalty Shootout' && (
				<span className='summary-event__comment'>({eventEl?.comments})</span>
			)}

			{eventEl?.detail === 'Own Goal' && (
				<span className='summary-event__comment'>(Own goal)</span>
			)}
			{eventEl?.detail === 'Penalty' && (
				<span className='summary-event__comment'>(Penalty)</span>
			)}
			{eventEl?.type === 'Var' && (
				<span className='summary-event__comment'>({eventEl?.detail})</span>
			)}
			{eventEl?.detail === 'Missed Penalty' && (
				<span className='summary-event__comment'>(Penalty missed)</span>
			)}
		</div>
	);
}
