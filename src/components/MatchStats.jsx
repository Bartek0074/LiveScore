import React from 'react';

import MatchStat from './MatchStat';

import '../styles/Stats.scss';

export default function MatchStats({ stats }) {
	return (
		<div className='stats'>
			{stats[0] ? (
				<>
					<MatchStat
						valueHome={stats[0]?.statistics[9]?.value}
						valueAway={stats[1]?.statistics[9]?.value}
						type={stats[0]?.statistics[9]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[2]?.value}
						valueAway={stats[1]?.statistics[2]?.value}
						type={stats[0]?.statistics[2]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[0]?.value}
						valueAway={stats[1]?.statistics[0]?.value}
						type={stats[0]?.statistics[0]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[1]?.value}
						valueAway={stats[1]?.statistics[1]?.value}
						type={stats[0]?.statistics[1]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[3]?.value}
						valueAway={stats[1]?.statistics[3]?.value}
						type={stats[0]?.statistics[3]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[4]?.value}
						valueAway={stats[1]?.statistics[4]?.value}
						type={stats[0]?.statistics[4]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[5]?.value}
						valueAway={stats[1]?.statistics[5]?.value}
						type={stats[0]?.statistics[5]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[7]?.value}
						valueAway={stats[1]?.statistics[7]?.value}
						type={stats[0]?.statistics[7]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[8]?.value}
						valueAway={stats[1]?.statistics[8]?.value}
						type={stats[0]?.statistics[8]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[12]?.value}
						valueAway={stats[1]?.statistics[12]?.value}
						type={stats[0]?.statistics[12]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[6]?.value}
						valueAway={stats[1]?.statistics[6]?.value}
						type={stats[0]?.statistics[6]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[10]?.value}
						valueAway={stats[1]?.statistics[10]?.value}
						type={stats[0]?.statistics[10]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[11]?.value}
						valueAway={stats[1]?.statistics[11]?.value}
						type={stats[0]?.statistics[11]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[13]?.value}
						valueAway={stats[1]?.statistics[13]?.value}
						type={stats[0]?.statistics[13]?.type}
					/>
					<MatchStat
						valueHome={stats[0]?.statistics[14]?.value}
						valueAway={stats[1]?.statistics[14]?.value}
						type={stats[0]?.statistics[14]?.type}
					/>{' '}
				</>
			) : (
				<div className='stats__no-stats-info'>
					<p>No stats for this match!</p>
				</div>
			)}
		</div>
	);
}
