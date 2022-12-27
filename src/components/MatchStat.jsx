import React from 'react';

import '../styles/Stat.scss';

export default function MatchStat({ valueHome, valueAway, type }) {
	if (!valueHome) valueHome = 0;
	if (!valueAway) valueAway = 0;

	let valueHomePercent;
	let valueAwayPercent;
	if (valueHome !== 0 || valueAway !== 0) {
		valueHomePercent =
			(parseInt(valueHome) / (parseInt(valueHome) + parseInt(valueAway))) * 100;
		valueAwayPercent =
			(parseInt(valueAway) / (parseInt(valueHome) + parseInt(valueAway))) * 100;
	} else {
		valueHomePercent = 0;
		valueAwayPercent = 0;
	}
	return (
		<div className='stat'>
			<div className='stat__header'>
				<span className='stat__value'>{valueHome}</span>
				<span className='stat__type'>{type}</span>
				<span className='stat__value'>{valueAway}</span>
			</div>
			<div className='stat__bar'>
				<div className='stat__bar-home'>
					<div
						className='stat__bar-home-fill'
						style={
							valueHomePercent > valueAwayPercent
								? { backgroundColor: '#5F8D4E', width: `${valueHomePercent}%` }
								: { width: `${valueHomePercent}%` }
						}
					></div>
				</div>
				<div className='stat__bar-away'>
					<div
						className='stat__bar-away-fill'
						style={
							valueHomePercent < valueAwayPercent
								? { backgroundColor: '#5F8D4E', width: `${valueAwayPercent}%` }
								: { width: `${valueAwayPercent}%` }
						}
					></div>
				</div>
			</div>
		</div>
	);
}
