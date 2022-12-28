import React, { useEffect, useState } from 'react';
import MatchCard from './MatchCard';

import '../styles/Results.scss';

export default function Results({ matches }) {
	const [results, setResults] = useState([]);
	const [rounds, setRounds] = useState([]);

	const [numberOfRounds, setNumberOfRounds] = useState(3);

	const showMoreRounds = () => {
		if (numberOfRounds + 2 <= rounds?.length) {
			setNumberOfRounds(numberOfRounds + 2);
		} else if (numberOfRounds + 2 > rounds?.length) {
			setNumberOfRounds(rounds?.length);
		}
	};

	useEffect(() => {
		let newResults = [];
		matches.forEach((match) => {
			if (
				match?.fixture?.status?.short === 'FT' ||
				match?.fixture?.status?.short === 'AET' ||
				match?.fixture?.status?.short === 'PEN' ||
				match?.fixture?.status?.short === 'PST' ||
				match?.fixture?.status?.short === 'CANC' ||
				match?.fixture?.status?.short === 'ABD' ||
				match?.fixture?.status?.short === 'AWD' ||
				match?.fixture?.status?.short === 'WO'
			) {
				newResults.push(match);
			}
		});
		setResults(newResults.reverse());
	}, [matches]);

	useEffect(() => {
		let newRounds = [];

		results.forEach((result) => {
			if (!newRounds.includes(result?.league?.round)) {
				newRounds.push(result?.league?.round);
			}
		});
		setRounds(newRounds);
	}, [results]);

	return (
		<div className='results'>
			{rounds[0] ? (
				<>
					{rounds.map((round, roundId) => {
						if (roundId < numberOfRounds) {
							return (
								<div className='results__element' key={roundId}>
									<div className='results__round'>
										<p>Round {round.replace(/^\D+/g, '')}</p>
									</div>
									{results.map((result, resultId) => {
										if (result?.league?.round === round) {
											return <MatchCard match={result} key={resultId} />;
										} else return null;
									})}
								</div>
							);
						} else return null;
					})}
					{numberOfRounds < rounds?.length ? (
						<div className='results__button-box'>
							<button className='results__button' onClick={showMoreRounds}>
								Show more
							</button>
						</div>
					) : null}
				</>
			) : (
				<div className='results__no-matches-info'>
					<p>No matches!</p>
				</div>
			)}
		</div>
	);
}
