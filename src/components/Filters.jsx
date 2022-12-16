import React, { useState, useEffect } from 'react';
import '../styles/Filters.scss';

export default function Filters({ setStatuses }) {
	const [filter, setFilter] = useState('all');

	useEffect(() => {
		if (filter === 'all') {
			setStatuses([
				'TBD',
				'NS',
				'1H',
				'HT',
				'2H',
				'ET',
				'BT',
				'P',
				'SUSP',
				'INT',
				'FT',
				'AET',
				'PEN',
				'PST',
				'CANC',
				'ABD',
				'AWD',
				'WO',
				'LIVE',
			]);
		} else if (filter === 'live') {
			setStatuses(['1H', 'HT', '2H', 'ET', 'BT', 'P', 'SUSP', 'INT']);
		} else if (filter === 'finished') {
			setStatuses(['FT', 'AET', 'PEN']);
		} else if (filter === 'sheduled') {
			setStatuses(['TBD', 'NS']);
		}
	}, [filter]);

	return (
		<div className='filters'>
			<button
				onClick={() => {
					setFilter('all');
				}}
				className={
					filter === 'all'
						? 'filters__btn filters__btn--active'
						: 'filters__btn'
				}
			>
				All
			</button>
			<button
				onClick={() => {
					setFilter('live');
				}}
				className={
					filter === 'live'
						? 'filters__btn filters__btn--active'
						: 'filters__btn'
				}
			>
				Live
			</button>
			<button
				onClick={() => {
					setFilter('finished');
				}}
				className={
					filter === 'finished'
						? 'filters__btn filters__btn--active'
						: 'filters__btn'
				}
			>
				Finished
			</button>
			<button
				onClick={() => {
					setFilter('sheduled');
				}}
				className={
					filter === 'sheduled'
						? 'filters__btn filters__btn--active'
						: 'filters__btn'
				}
			>
				Sheduled
			</button>
		</div>
	);
}
