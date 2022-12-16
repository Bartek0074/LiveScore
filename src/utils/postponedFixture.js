export const postponedFixture = {
	get: 'fixtures',
	parameters: {
		id: '979594',
	},
	errors: [],
	results: 1,
	paging: {
		current: 1,
		total: 1,
	},
	response: [
		{
			fixture: {
				id: 979594,
				referee: null,
				timezone: 'UTC',
				date: '2022-12-16T11:00:00+00:00',
				timestamp: 1671188400,
				periods: {
					first: null,
					second: null,
				},
				venue: {
					id: 11952,
					name: 'Legia Training Center',
					city: 'Urszulin',
				},
				status: {
					long: 'Match Postponed',
					short: 'PST',
					elapsed: null,
				},
			},
			league: {
				id: 667,
				name: 'Friendlies Clubs',
				country: 'World',
				logo: 'https://media-6.api-sports.io/football/leagues/667.png',
				flag: null,
				season: 2022,
				round: 'Club Friendlies 3',
			},
			teams: {
				home: {
					id: 339,
					name: 'Legia Warszawa',
					logo: 'https://media-5.api-sports.io/football/teams/339.png',
					winner: null,
				},
				away: {
					id: 6953,
					name: 'Ruch Chorzów',
					logo: 'https://media-6.api-sports.io/football/teams/6953.png',
					winner: null,
				},
			},
			goals: {
				home: null,
				away: null,
			},
			score: {
				halftime: {
					home: null,
					away: null,
				},
				fulltime: {
					home: null,
					away: null,
				},
				extratime: {
					home: null,
					away: null,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
			events: [],
			lineups: [],
			statistics: [],
			players: [],
		},
	],
};
