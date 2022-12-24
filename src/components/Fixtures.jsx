import React, { useEffect, useState } from 'react';
import MatchCard from './MatchCard';

import '../styles/Fixtures.scss';

export default function Fixtures({ matches }) {
	const [fixtures, setFixtures] = useState([]);
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
		let newFixtures = [];
		matches.forEach((match) => {
			if (
				match?.fixture?.status?.short === 'NS' ||
				match?.fixture?.status?.short === 'TBD' ||
				match?.fixture?.status?.short === '1H' ||
				match?.fixture?.status?.short === 'HT' ||
				match?.fixture?.status?.short === '2H' ||
				match?.fixture?.status?.short === 'ET' ||
				match?.fixture?.status?.short === 'BT' ||
				match?.fixture?.status?.short === 'P' ||
				match?.fixture?.status?.short === 'SUSP' ||
				match?.fixture?.status?.short === 'INT' ||
				match?.fixture?.status?.short === 'LIVE'
			) {
				newFixtures.push(match);
			}
		});
		newFixtures.sort((a, b) => a?.fixture?.timestamp > b?.fixture?.timestamp);

		setFixtures(newFixtures);
	}, [matches]);

	useEffect(() => {
		let newRounds = [];

		fixtures.forEach((result) => {
			if (!newRounds.includes(result?.league?.round)) {
				newRounds.push(result?.league?.round);
			}
		});
		newRounds.sort(
			(a, b) =>
				parseInt(a.replace(/^\D+/g, '')) > parseInt(b.replace(/^\D+/g, ''))
		);

		setRounds(newRounds);
	}, [fixtures]);

	return (
		<div className='fixtures'>
			{rounds.map((round, roundId) => {
				if (roundId < numberOfRounds) {
					return (
						<div className='fixtures__element' key={roundId}>
							<div className='fixtures__round'>
								<p>Round {round.replace(/^\D+/g, '')}</p>
							</div>
							{fixtures.map((result, resultId) => {
								if (result?.league?.round === round) {
									return <MatchCard match={result} key={resultId} />;
								} else return null;
							})}
						</div>
					);
				} else return null;
			})}
			{numberOfRounds < rounds?.length ? (
				<div className='fixtures__button-box'>
					<button className='fixtures__button' onClick={showMoreRounds}>
						Show more
					</button>
				</div>
			) : null}
		</div>
	);
}
