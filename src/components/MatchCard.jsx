import React from 'react';

export default function MatchCard({ match }) {
	return (
		<div>
			<p>
				{match.teams.away.name} - {match.teams.home.name}
			</p>
		</div>
	);
}
