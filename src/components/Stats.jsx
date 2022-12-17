import React from 'react';
import Stat from './Stat';

export default function Stats({ stats }) {
	// console.log(stats[0].statistics);
	return (
		<div>
			{stats[0] ? (
				<>
					<Stat
						valueHome={stats[0]?.statistics[9]?.value}
						valueAway={stats[1]?.statistics[9]?.value}
						type={stats[0]?.statistics[9]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[2]?.value}
						valueAway={stats[1]?.statistics[2]?.value}
						type={stats[0]?.statistics[2]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[0]?.value}
						valueAway={stats[1]?.statistics[0]?.value}
						type={stats[0]?.statistics[0]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[1]?.value}
						valueAway={stats[1]?.statistics[1]?.value}
						type={stats[0]?.statistics[1]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[3]?.value}
						valueAway={stats[1]?.statistics[3]?.value}
						type={stats[0]?.statistics[3]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[4]?.value}
						valueAway={stats[1]?.statistics[4]?.value}
						type={stats[0]?.statistics[4]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[5]?.value}
						valueAway={stats[1]?.statistics[5]?.value}
						type={stats[0]?.statistics[5]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[7]?.value}
						valueAway={stats[1]?.statistics[7]?.value}
						type={stats[0]?.statistics[7]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[8]?.value}
						valueAway={stats[1]?.statistics[8]?.value}
						type={stats[0]?.statistics[8]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[12]?.value}
						valueAway={stats[1]?.statistics[12]?.value}
						type={stats[0]?.statistics[12]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[6]?.value}
						valueAway={stats[1]?.statistics[6]?.value}
						type={stats[0]?.statistics[6]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[10]?.value}
						valueAway={stats[1]?.statistics[10]?.value}
						type={stats[0]?.statistics[10]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[11]?.value}
						valueAway={stats[1]?.statistics[11]?.value}
						type={stats[0]?.statistics[11]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[13]?.value}
						valueAway={stats[1]?.statistics[13]?.value}
						type={stats[0]?.statistics[13]?.type}
					/>
					<Stat
						valueHome={stats[0]?.statistics[14]?.value}
						valueAway={stats[1]?.statistics[14]?.value}
						type={stats[0]?.statistics[14]?.type}
					/>{' '}
				</>
			) : <p>No stats for this match</p>}
		</div>
	);
}
